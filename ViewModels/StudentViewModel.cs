using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KarmaAmarDeep.ViewModels
{
    //public enum Gender
    //{
    //  Male = 1,
    //  Female = 2,
    //}
    public class StudentViewModel
    {
      public long Id { get; set; }
      public string FirstName { get; set; }
      public string MiddleName { get; set; }
      public string LastName { get; set; }
      public string Gender { get; set; }
      public string DateOfBirth { get; set; }
      public string School { get; set; }
      public string Standard { get; set; }
      public string Achivements { get; set; }
      public string ParentMobileNumber { get; set; }
      public string Nationality { get; set; }
      public string Address { get; set; }
      public string State { get; set; }
      public string City { get; set; }
      public string Taluka { get; set; }
      public string StudentPhoto { get; set; }
      public string MarksheetLastYear { get; set; }
      public string RepresentativeId { get; set; }
    }
}
