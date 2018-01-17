using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore; 


namespace KarmaAmarDeep.Models.Entities
{
    public class AppRole :IdentityRole
    {
        public string Description { get; set; }
        public DateTime CreatedDate { get; set; } 
        public string IPAddress { get; set; }
    }
}
