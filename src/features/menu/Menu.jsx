import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../service/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();

  console.log("Dữ liệu từ useLoaderData:", menu);

  if (!menu) return <p>Loading menu...</p>;

  return (
    <ul>
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  console.log("Dữ liệu từ API:", menu);
  return menu;
}

export default Menu;
