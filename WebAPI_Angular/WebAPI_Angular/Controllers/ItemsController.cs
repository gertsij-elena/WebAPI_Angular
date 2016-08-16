using System.Collections.Generic;
using System.Web.Http;
using WebAPI_Angular.Models;
using WebAPI_Angular.Interface;
using WebAPI_Angular.Repository;
using System.Collections;


namespace WebAPI_Angular.Controllers
{
    public class ItemsController : ApiController
    {
        static readonly IRepository r = new ItemRepository();
        public IEnumerable GetAllItems()
        {
            return r.GetAll();
        }

        public Items PostItem(Items item)
        {
            return r.Add(item);
        }

        public IEnumerable<Items> PutItem(Items items)
        {
            if (r.Update(items))
            {
                return r.GetAll();
            }
            else
            {
                return null;
            }
        }

        public bool DeleteItem(int id)
        {     
            if (r.Delete(id))
            {
                return true;
            }
            else
            {
                return false;
            }
        }

    }
}