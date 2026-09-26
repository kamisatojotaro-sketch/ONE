import { openDB } from 'idb';

const DB_NAME = 'one-tracker-db';
const DB_VERSION = 1;

export async function getDB() {
  return openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      const stores = ['games', 'movies', 'anime', 'music_events', 'notes'];
      
      stores.forEach(storeName => {
        if (!db.objectStoreNames.contains(storeName)) {
          const store = db.createObjectStore(storeName, { keyPath: 'id' });
          store.createIndex('status', 'status');
          store.createIndex('rating', 'rating');
          store.createIndex('createdAt', 'createdAt');
          store.createIndex('title', 'title');
        }
      });

      if (!db.objectStoreNames.contains('settings')) {
        db.createObjectStore('settings', { keyPath: 'key' });
      }
    },
  });
}
