using WebAPI_Angular.Models;
using System.Collections.Generic;

namespace WebAPI_Angular.Interface
{
    interface IRepository
    {
        IEnumerable<Items> GetAll();
        Items Get(int id);
        Items Add(Items item);
        bool Update(Items item);
        bool Delete(int id);
    }
}