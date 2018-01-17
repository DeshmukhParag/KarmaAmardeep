using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace KarmaAmarDeep.Models.Entities
{
    public class Country
    {
        public Country()
        {
            this.CountryID = Guid.NewGuid();
        } 

      [Key]
      public Guid CountryID{ get; set; }

      public string CountryName { get; set; }
    }
}
