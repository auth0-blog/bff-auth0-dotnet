using Microsoft.AspNetCore.Authorization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Authorization
{
    public class ScopeRequirement : IAuthorizationRequirement
    {
        public string Scope { get; private set; }

        public ScopeRequirement(string scope)
        {
            Scope = scope;
        }
    }
}
