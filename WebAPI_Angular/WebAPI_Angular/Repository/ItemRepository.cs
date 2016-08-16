using WebAPI_Angular.Interface;
using WebAPI_Angular.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPI_Angular.Repository
{

    public class ItemRepository : IRepository
    {
        Entity db = new Entity();

        public IEnumerable<Items> GetAll()
        {
            return db.Items;
        }

        public Items Get(int id)
        {
            // TO DO : Code to find a record in database
            return db.Items.Find(id);
        }

        public Items Add(Items item)
        {
            if (item == null)
            {
                throw new ArgumentNullException("item");
            }

            // TO DO : Code to save record into database
            db.Items.Add(item);
            db.SaveChanges();
            return item;
        }

        public bool Update(Items item)
        {
            if (item == null)
            {
                throw new ArgumentNullException("item");
            }
            var it = db.Items.Find(item.ItemId);
            it.Name = item.Name;
            it.Price = item.Price;
            it.Count = item.Count;
            db.SaveChanges();
            return true;
        }

        public bool Delete(int id)
        {
            Items item = db.Items.Find(id);
               db.Items.Remove(item);
                db.SaveChanges();
                return true;
        }
    }
}
