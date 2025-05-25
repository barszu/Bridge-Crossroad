"use client";
import {
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  Icon,
  useBoolean,
} from "@chakra-ui/react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

export interface IPasswordInputProps {
  placeholder?: string;
}

export default function PasswordInput(props: IPasswordInputProps) {
  const [show, setShow] = useBoolean(true);
  const [isEmpty, setIsEmpty] = useBoolean(true);

  return (
    <InputGroup size="md">
      <Input
        placeholder={props.placeholder}
        type={show ? "password" : ""}
        focusBorderColor="accent.500"
        fontSize={show && !isEmpty ? "3xl" : ""} // for bigger dots
        lineHeight={show ? "short" : ""} // for bigger dots
        onChange={(e) => {
          if (e.target.value === "") {
            setIsEmpty.on();
          } else {
            setIsEmpty.off();
          }
        }}
      />
      <InputRightElement>
        <IconButton
          aria-label={show ? "Ukryj hasło" : "Pokaż hasło"}
          icon={<Icon as={show ? MdVisibilityOff : MdVisibility} />}
          onClick={setShow.toggle}
          size="md"
          variant="ghost"
          _hover={{ bg: "none" }}
        />
      </InputRightElement>
    </InputGroup>
  );
}
