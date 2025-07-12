class DataStructure
    {
        constructor()
        {
            this.itemList = [];
        }
        Count()
        {
            return this.itemList.length;
        }
        Add(item)
        {
            this.itemList.push(item);
        }
        Insert(item, index)
        {
            if(Number.isInteger(index))
            {
                this.itemList.splice(index < 0 ? 0 : index > this.itemList.length ? this.itemList.length : index, 0, item);
            }
            else
            {
                console.error(`Invalid index: ${index}. Must be an integer.`);
            }
        }
        AddBulk(items)
        {
            if(Array.isArray(items))
            {
                for(let item of items)
                {
                    this.itemList.push(item);
                }
            }
            else
            {
                console.error(`Invalid input: ${items}. Must be an array.`);
            }
        }
        ClampIndex(index)
        {
            return index < 0 ? 0 : index > this.itemList.length ? this.itemList.length : index
        }
        InsertBulk(items, index)
        {
            if(!Array.isArray(items))
            {
                console.error(`Invalid input: ${items}. Must be an array.`);
                return;
            }
            if(!Number.isInteger(index))
            {
                console.error(`Invalid index: ${index}. Must be an integer.`);
                return;
            }
            //if(Array.isArray(items) && Number.isInteger(index))
            {
                index = this.ClampIndex(index);
                //for(let item of items)
                // (...items) ==> syntax (spread operator) expands the elements of arr2 so each is inserted as a separate item
                {
                    this.itemList.splice(index, 0, ...items);
                    // index++;
                }
            }
            //else
            {
                //console.error(`Invalid input: ${items} or index: ${index}. Must be an array and an integer.`);
            }
        }
        Clear()
        {
            this.itemList = [];
        }
        RemoveByIndex(item)
        {
            if(this.IndexCheck(item))
                this.itemList = this.itemList.splice(item, 1);
        }

        IndexCheck()
        {
            if(!Number.isInteger(item) || item < 0 || item >= this.itemList.length)
            {
                console.error(`Invalid index: ${item}. Must be a non-negative integer within the bounds of the list.`);
                return false;
            }
            return true;    
        }

        RemoveByItem(item)
        {
            // let currentCount = this.itemList.length;
            // // If the currentItem is NOT equal to the desired item, then it will be kept in the list.
            // // If the currentItem IS equal to the desired item, then it will be removed from the list.
            // this.itemList = this.itemList.filter((currentItem) => currentItem !== item);
            // if(this.itemList.length == currentCount)
            // {
            //     console.warn(`Item: "${item}" not found in the list.`);
            // }

            let index = this.itemList.indexOf(item);
            if(index !== -1)
            {
                this.itemList.splice(index, 1);
            }
            else
            {
                console.warn(`Item: "${item}" not found in the list.`);
            }
        }

        // RemoveBulk()
        // {

        // }

        // RemoveByType()
        // {

        // }

        // RemoveBulkByType()
        // {

        // }
        
        GetByIndex(item)
        {
            if(this.IndexCheck(item))
            {
                return this.itemList[item];
            }
            return null;
        }
        
        GetByItem(item)
        {
            let index = this.itemList.indexOf(item);
            if(index !== -1)
            {
                return this.itemList[index];
            }
            console.warn(`Item: "${item}" not found in the list.`);
            return null;
        }

        // GetByType()
        // {

        // }

        // GetBulk()
        // {

        // }

        // GetBulkByType()
        // {

        // }

        SetByIndex(item, newItem)
        {
            if(this.IndexCheck(item))
            {
                this.itemList[item] = newItem;
            }
            else
            {
                console.warn(`Invalid index: ${item}. Must be a non-negative integer within the bounds of the list.`);
            }
        }

        SetByItem(item, newItem)
        {
            let index = this.itemList.indexOf(item);
            if(index !== -1)
            {
                this.itemList[index] = newItem;
            }
            else
            {
                console.warn(`Item: "${item}" not found in the list.`);
            }
        }

        // SetByType()
        // {

        // }

        // SetBulk()
        // {

        // }
        
        // SetBulkByType()
        // {

        // }
    }
