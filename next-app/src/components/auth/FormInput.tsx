import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";
import PasswordInput from "./PasswordInput";

export interface IFormInputProps {
  placeholder: string;
  errorMessage: string;
  isInvalid?: boolean;
  id?: string;
  isRequired?: boolean;
  type?: "password" | "text" | "email" | "number";
  onElementProps?: FormControlProps;
}

export default function FormInput(props: IFormInputProps) {
  return (
    <FormControl
      isInvalid={props.isInvalid}
      id={props.id}
      isRequired={props.isRequired}
      {...props.onElementProps}
    >
      <FormErrorMessage>{props.errorMessage}</FormErrorMessage>

      {props.type === "password" ? (
        <PasswordInput placeholder={props.placeholder} />
      ) : (
        <Input
          placeholder={props.placeholder}
          type={props.type}
          focusBorderColor="accent.500"
        />
      )}
    </FormControl>
  );
}
