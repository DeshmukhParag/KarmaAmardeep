using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace KarmaAmarDeep.Models.Entities
{
    public class Contact :BaseEntity
    {
        
        public string Name { get; set; }
        public DateTime Birthday { get; set; }
        public string Location { get; set; }
        public string Organization { get; set; }
        public string Email { get; set; }
        public string MobileNo { get; set; }
        public string Message { get; set; }
    }
}
