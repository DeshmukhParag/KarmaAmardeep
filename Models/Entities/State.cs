using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace KarmaAmarDeep.Models.Entities
{
    public class State
    {

        public State()
        {
            this.StateID = Guid.NewGuid();
        }

      [Key]
      public Guid StateID { get; set; }
      
      public Guid CountryID { get; set; }

      [ForeignKey("CountryID")]
      public virtual Country Country { get; set; } 

      public string StateName { get; set; }
    }
}
