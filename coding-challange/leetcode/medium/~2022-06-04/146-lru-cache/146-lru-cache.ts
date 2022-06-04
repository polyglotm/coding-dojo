/*
146-lru-cache
leetcode/medium/146. LRU Cache
URL: https://leetcode.com/problems/lru-cache/

NOTE: Description
NOTE: Constraints
  - 1 <= capacity <= 3000
  - 0 <= key <= 104
  - 0 <= value <= 105
  - At most 2 * 105 calls will be made to get and put.

NOTE: Explanation
NOTE: Reference
*/

class LRUCache {
  private capacity: number;
  private map: Map<number, number>;
  private cacheHistory: number[];

  constructor(capacity: number) {
    this.capacity = capacity;
    this.map = new Map<number, number>();
    this.cacheHistory = [];
  }

  updateCacheOrder(key: number) {
    const index = this.cacheHistory.indexOf(key);

    if (index > -1) {
      this.cacheHistory.splice(index, 1);
    }
    this.cacheHistory.push(key);
  }

  get(key: number): number {
    if (this.map.has(key)) {
      this.updateCacheOrder(key);
      return this.map.get(key);
    }

    return -1;
  }

  put(key: number, value: number): void {
    if (this.map.has(key)) {
      this.map.set(key, value);
      this.updateCacheOrder(key);
      return;
    }

    if (this.cacheHistory.length >= this.capacity) {
      this.map.delete(this.cacheHistory.shift());
    }

    this.map.set(key, value);
    this.cacheHistory.push(key);
  }
}

const lRUCache: LRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1);    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2);    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1);    // return -1 (not found)
lRUCache.get(3);    // return 3
lRUCache.get(4);    // return 4
