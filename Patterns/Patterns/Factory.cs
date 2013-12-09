using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Patterns
{
    public struct Duration
    {
        private readonly long ticks;
        public long Ticks { get { return ticks; } }

        private Duration(long inTicks)
        {
            this.ticks = inTicks;
        }

        public static Duration FromTicks (long inTicks)
        {
            return new Duration(inTicks);
        }

        public static Duration FromMilliseconds (long milliseconds)
        {
            return new Duration(milliseconds * 10000);
        }

        public static Duration FromSeconds(long seconds)
        {
            return new Duration(seconds * 10000 * 1000);
        }
    }

    [TestClass]
    public class DurationTest
    {
        [TestMethod]
        public void TestDuration()
        {
            Duration duration = Duration.FromSeconds(5);
            Assert.AreEqual(50000000, duration.Ticks);
        }
    }
   
}
