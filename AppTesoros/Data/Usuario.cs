using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AppTesoros.Data
{
    public class Usuario:IdentityUser
    {
        [PersonalData]
        public string Nombre { get; set; }
        [PersonalData]
        public string Color { get; set; }
        public List<Tesoro> Tesoros { get; set; }
    }
}
