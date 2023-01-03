



class ItemManager {
    constructor(currentId = 0) {
      this.items = [];
      this.currentId = currentId;
    }

    addItem(value) {
        const item = {
          id: this.currentId++,
          value: value
        };
    
        this.items.push(item);
    }

    render() {
      const itemsList = [];
      for (let i = 0; i < this.items.length; i++) {
        const item = this.items[i];
        itemsList.push(item);
      }
    }
    save() {
        const itemsJson = JSON.stringify(this.items);
        localStorage.setItem('items', itemsJson);
        const currentId = String(this.currentId);
        localStorage.setItem('currentId', currentId);
      }

      load() {
        if (localStorage.getItem('items')) {
          const itemsJson = localStorage.getItem('items');
          this.items = JSON.parse(itemsJson);
        }
    
        if (localStorage.getItem('currentId')) {
          const currentId = localStorage.getItem('currentId');
          this.currentId = Number(currentId);
        }
      }
    
    }