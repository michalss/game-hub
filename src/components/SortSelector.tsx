import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

export const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: "", lable: "Relevance" },
    { value: "-added", lable: "Date added" },
    { value: "name", lable: "Name" },
    { value: "-released", lable: "Release data" },
    { value: "-metacritic", lable: "Popularity" },
    { value: "-rating", lable: "Average rating" },
  ];

  const currentSortOrder = sortOrders.find((f) => f.value === sortOrder);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortOrder?.lable || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((sort) => (
          <MenuItem
            onClick={() => onSelectSortOrder(sort.value)}
            key={sort.value}
            value={sort.value}
          >
            {sort.lable}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
