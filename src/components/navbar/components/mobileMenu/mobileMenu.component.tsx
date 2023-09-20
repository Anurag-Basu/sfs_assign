import { Menu, Dropdown, Button } from "antd";
import { List } from "react-feather";

interface Props {
  items: {
    key: string;
    href: string;
    title: string;
  }[];
}

const MobileMenu = ({ items }: Props) => {
  const menu = (
    <Menu>
      {items.map((item) => (
        <Menu.Item key={item.key}>
          <a href={item.href}>{item.title}</a>
        </Menu.Item>
      ))}
    </Menu>
  );

  console.log({ menu });

  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <Button
        icon={<List color="white" />}
        type="text"
        className="mobile-menu-button"
      />
    </Dropdown>
  );
};
export default MobileMenu;
