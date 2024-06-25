using SavingsSpot.Entities;

namespace SavingsSpot.Data
{
    public static class DbInitializer
    {
        public static void Initialize(DealContext context)
        {
            if (context.Deals.Any()) return;

            var deals = new List<Deal>
            {
              new Deal
                {
                    Title = "Deal 1",
                    Description = "Deal 1 Description",
                    Date = DateTime.Now,
                    CurrentPrice = 500,
                    Discount = 50,
                    Mrp = 1000,
                    Active = true,
                    Url = "/images/products/sb-ang1.png",
                    ValueForMoney = 8

                },
                new Deal
                {
                    Title = "Deal 2",
                    Description = "Deal 2 Description",
                    Date = DateTime.Now,
                    CurrentPrice = 5000,
                    Discount = 500,
                    Mrp = 10000,
                    Active = true,
                    Url = "/images/products/sb-ang2.png",
                    ValueForMoney = 7

                },
                new Deal
                {
                    Title = "Deal 3",
                    Description = "Deal 3 Description",
                    Date = DateTime.Now,
                    CurrentPrice = 50,
                    Discount = 50,
                    Mrp = 100,
                    Url = "/images/products/sb-core1.png",
                    ValueForMoney = 3
                }
            };
            context.Deals.AddRange(deals);
            context.SaveChanges();
        }
    }
}
