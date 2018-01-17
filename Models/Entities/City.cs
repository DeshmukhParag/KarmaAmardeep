using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace KarmaAmarDeep.Models.Entities
{
    public class City
    {
        public City()
        {
          CityID = Guid.NewGuid();
        }

      [Key]
      public Guid CityID { get; set; }

      public Guid StateID { get; set; } 

      [ForeignKey("StateID")]
      public virtual State State { get; set; }

      public string CityName { get; set; }
    }
}
