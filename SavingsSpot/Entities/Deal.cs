namespace SavingsSpot.Entities
{
    public class Deal
    {
        public int  DealId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Url { get; set; }
        public int ValueForMoney { get; set; }
        public DateTime Date { get; set; }
        public long Mrp { get; set; }
        public long CurrentPrice { get; set; }
        public long Discount { get; set; }
        public bool Active { get; set; } 
    }
}
