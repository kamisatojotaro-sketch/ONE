import { useState, useEffect, useRef } from 'react';
import { Pin, X, Trash2, Save, Eye, Edit2 } from 'lucide-react';
import Modal from '../shared/Modal';

function parseMarkdown(text) {
  if (!text) return '';
  let html = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
  
  html = html.replace(/```([\s\S]*?)```/g, '<pre class="bg-bg-elevated p-3 rounded-md my-2 overflow-x-auto text-sm font-mono border border-border-default"><code>$1</code></pre>');
  html = html.replace(/`([^`]+)`/g, '<code class="bg-bg-elevated px-1 py-0.5 rounded text-sm font-mono text-accent-primary">$1</code>');
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  html = html.replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold mt-4 mb-2 font-serif text-text-primary">$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mt-5 mb-3 font-serif text-text-primary">$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mt-6 mb-4 font-serif text-text-primary">$1</h1>');
  html = html.replace(/^- (.*$)/gim, '<li class="ml-4 list-disc marker:text-accent-primary">$1</li>');
  html = html.replace(/(<li.*<\/li>)\n/g, '$1'); 
  
  html = html.split('\n\n').map(p => {
    if (p.startsWith('<pre') || p.startsWith('<h') || p.startsWith('<li')) return p;
    return `<p class="mb-3">${p.replace(/\n/g, '<br/>')}</p>`;
  }).join('');
  
  return html;
}

export default function NoteEditor({ note, onSave, onDelete, onClose }) {
  const [formData, setFormData] = useState({
    title: '', content: '', category: 'General', tags: [], isPinned: false
  });
  const [tab, setTab] = useState('edit');
  const [tagInput, setTagInput] = useState('');
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (note) {
      setFormData(note);
    } else {
      setFormData({ title: '', content: '', category: 'General', tags: [], isPinned: false });
    }
  }, [note]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);
    
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      if (note?.id && (newFormData.title || newFormData.content)) {
        onSave(newFormData);
      }
    }, 1500);
  };

  const handleManualSave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    onSave(formData);
    onClose();
  };

  const addTag = (e) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      const newTag = tagInput.trim().replace(/,/g, '');
      if (newTag && !formData.tags.includes(newTag)) {
        setFormData({ ...formData, tags: [...formData.tags, newTag] });
      }
      setTagInput('');
    }
  };

  const removeTag = (tagToRemove) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter(t => t !== tagToRemove)
    });
  };

  return (
    <Modal isOpen={true} onClose={handleManualSave} className="max-w-3xl w-full h-[85vh] flex flex-col">
      <div className="flex items-center justify-between border-b border-border-default pb-4 mb-4">
        <div className="flex gap-2 bg-bg-elevated p-1 rounded-lg">
          <button 
            onClick={() => setTab('edit')} 
            className={`px-3 py-1.5 rounded-md text-sm font-medium flex items-center gap-2 transition-colors ${tab === 'edit' ? 'bg-bg-surface text-accent-primary shadow-sm' : 'text-text-muted hover:text-text-primary'}`}
          >
            <Edit2 size={14} /> Edit
          </button>
          <button 
            onClick={() => setTab('preview')} 
            className={`px-3 py-1.5 rounded-md text-sm font-medium flex items-center gap-2 transition-colors ${tab === 'preview' ? 'bg-bg-surface text-accent-primary shadow-sm' : 'text-text-muted hover:text-text-primary'}`}
          >
            <Eye size={14} /> Preview
          </button>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setFormData({ ...formData, isPinned: !formData.isPinned })}
            className={`p-2 rounded-full transition-colors ${formData.isPinned ? 'text-accent-primary bg-accent-primary/10' : 'text-text-muted hover:bg-bg-surface-hover'}`}
            title="Pin Note"
          >
            <Pin size={20} fill={formData.isPinned ? 'currentColor' : 'none'} />
          </button>
          {note?.id && (
            <button 
              onClick={() => { if(window.confirm('Delete note?')) { onDelete(note.id); onClose(); } }}
              className="p-2 text-text-muted hover:text-red-500 rounded-full transition-colors hover:bg-red-50 dark:hover:bg-red-900/20"
              title="Delete Note"
            >
              <Trash2 size={20} />
            </button>
          )}
          <button onClick={handleManualSave} className="p-2 text-text-muted hover:text-text-primary rounded-full transition-colors hover:bg-bg-surface-hover">
            <X size={20} />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pr-2 flex flex-col custom-scrollbar">
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Note Title"
          className="w-full text-4xl font-serif font-bold bg-transparent border-none outline-none text-text-primary placeholder:text-text-muted/50 mb-6"
        />

        <div className="flex flex-wrap gap-4 mb-6 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-text-muted font-medium">Category:</span>
            <input 
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              list="categories"
              className="bg-bg-elevated border border-border-default rounded-md px-3 py-1.5 text-text-primary outline-none focus:border-accent-primary w-32"
            />
            <datalist id="categories">
              <option value="Physics" />
              <option value="Math" />
              <option value="Chemistry" />
              <option value="CS" />
              <option value="General" />
            </datalist>
          </div>
          
          <div className="flex items-center gap-2 flex-1">
            <span className="text-text-muted font-medium">Tags:</span>
            <div className="flex flex-wrap gap-2 items-center flex-1 bg-bg-elevated border border-border-default rounded-md px-2 py-1 focus-within:border-accent-primary">
              {formData.tags.map(tag => (
                <span key={tag} className="flex items-center gap-1 bg-bg-surface px-2 py-0.5 rounded text-xs border border-border-default text-text-secondary">
                  {tag}
                  <X size={12} className="cursor-pointer hover:text-text-primary" onClick={() => removeTag(tag)} />
                </span>
              ))}
              <input
                type="text"
                value={tagInput}
                onChange={e => setTagInput(e.target.value)}
                onKeyDown={addTag}
                placeholder={formData.tags.length === 0 ? "Add tags (comma or enter)..." : ""}
                className="bg-transparent border-none outline-none text-text-primary min-w-[120px] flex-1 text-sm"
              />
            </div>
          </div>
        </div>

        {tab === 'edit' ? (
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            placeholder="Write your notes here... (Supports basic markdown)"
            className="flex-1 w-full bg-transparent border-none outline-none resize-none font-sans text-text-secondary leading-relaxed text-base min-h-[300px]"
          />
        ) : (
          <div 
            className="flex-1 font-sans text-text-secondary leading-relaxed text-base min-h-[300px] pb-8 editor-preview"
            dangerouslySetInnerHTML={{ __html: parseMarkdown(formData.content) || '<span class="italic opacity-50">Empty note...</span>' }}
          />
        )}
      </div>
      
      <div className="mt-4 pt-4 border-t border-border-subtle flex justify-end gap-3">
        <button onClick={handleManualSave} className="bg-bg-elevated hover:bg-border-default text-text-primary px-4 py-2 rounded-lg font-medium transition-colors">
          Close
        </button>
        <button onClick={() => { onSave(formData); onClose(); }} className="bg-accent-primary hover:bg-accent-primary-hover text-white px-6 py-2 rounded-lg font-medium shadow-sm transition-colors flex items-center gap-2">
          <Save size={16} /> Save Note
        </button>
      </div>
    </Modal>
  );
}
