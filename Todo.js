class Todo {
    constructor(id, description) {
      this._id = id;
      this._description = description;
    }
  
    get id() {
      return this;
    }
  

    setdescription(newDescription) {
      this.description = newDescription;
    }
  }
  