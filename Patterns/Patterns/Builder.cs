using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Patterns
{
    /// <summary>
    /// Builder Design Pattern
    /// </summary>
    public class Builder
    {
        private sealed class Period
        {
            // make name immutable
            private readonly string name;

            // Private Constructor so that only possible way to construct a Period is using the Builder
            private Period(Builder builder)
            {
                this.name = builder.Name;
            }

            public sealed class Builder
            {
                public string Name { get; set; }

                public Period Build()
                {
                    return new Period(this);
                }
            }
        }

        [TestMethod]
        private void TestPeriod()
        {

        }
    }
}
