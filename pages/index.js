import Dropdown from "@/components/Dropdown";

const ORDERBY_ARRAY = [
  { key: "created", sortDesc: true, sort: "created", name: "최신등록순" },
  { key: "orderCount", sortDesc: true, sort: "orderCount", name: "주문많은순" },
  {
    key: "reviewCount",
    sortDesc: true,
    sort: "reviewCount",
    name: "리뷰많은순",
  },
  {
    key: "reviewScore",
    sortDesc: true,
    sort: "reviewScore",
    name: "평점높은순",
  },
  { key: "lowPrice", sortDesc: false, sort: "price", name: "낮은가격순" },
  { key: "highPrice", sortDesc: true, sort: "price", name: "높은가격순" },
];

const Index = () => {
  return (
    <div>
      <Dropdown
        idx={ORDERBY_ARRAY.map((o) => o.key).indexOf("created")}
        items={ORDERBY_ARRAY}
      />
    </div>
  );
};

export default Index;
