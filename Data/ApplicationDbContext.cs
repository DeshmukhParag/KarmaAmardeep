using KarmaAmarDeep.Models.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KarmaAmarDeep.Data
{

  public class ApplicationDbContext : IdentityDbContext<AppUser,AppRole,string >
  {
    public ApplicationDbContext(DbContextOptions options)
        : base(options)
    {
    }

    public DbSet<Representative> Representatives { get; set; } 
    public DbSet<Student> Students { get; set; }
    public DbSet<Contact> Contacts { get; set; } 
    public DbSet<image> images { get; set; } 
    public DbSet<Country> Countries { get; set; }
    public DbSet<State> States { get; set; }
    public DbSet<City> Cities { get; set; } 


  }
}
