using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KarmaAmarDeep.Models.Entities
{
    public class BaseEntity
    {
       public Int64 Id { get; set; }
       public DateTime AddedDate { get; set; }
       public DateTime Modifieddate { get; set; }
       public string IPAddress { get; set; } 
    }
}
