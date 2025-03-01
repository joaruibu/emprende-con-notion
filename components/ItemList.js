import { DATA_TYPE } from "../helpers/types";
import ItemBlog from "./ItemBlog";
import ItemTemplate from "./ItemTemplate";
import ItemCover from "./ItemCover";
import ItemCourse from "./ItemCourse";

const ItemList = ({ items, type }) => {
  console.log(items, type);
  const renderSwitch = (type, item, index) => {
    switch (type) {
      case DATA_TYPE.templates:
        return <ItemTemplate key={index} item={item}></ItemTemplate>;

      case DATA_TYPE.courses:
        return <ItemCourse key={index} item={item}></ItemCourse>;

      case DATA_TYPE.posts:
        return <ItemBlog key={index} item={item}></ItemBlog>;

      case DATA_TYPE.covers:
        return <ItemCover key={index} item={item}></ItemCover>;

      default:
        return <ItemTemplate key={index} item={item}></ItemTemplate>;
    }
  };

  return (
    <div
      className={`${type === DATA_TYPE.covers ? " sm:columns-1  " : " sm:columns-2 "}  columns-1 gap-9  py-12 mx-auto  `}
    >
      {items.map((item, index) => {
        return renderSwitch(type, item, index);
      })}
    </div>
  );
};

export default ItemList;
