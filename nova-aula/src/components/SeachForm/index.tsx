import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { BiSearch, BiSearchAlt } from "react-icons/bi";

const SeachForm = () => {
  return (
    <InputGroup _focusWithin={{border:"none"}}>
      <Input type="text" placeholder="Busque por..." _focus={{
        outline:"none",
        border:"solid 2px #d8d8d8",
      }} />
      <InputRightElement>
        <IconButton
          colorScheme="orange"
          aria-label="Seach database"
          icon={<BiSearchAlt/>}
        />
      </InputRightElement>
    </InputGroup>
  );
};

export default SeachForm;
