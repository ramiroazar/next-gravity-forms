import { conditionalLogicFragment } from "../../fragments";

export const textareaFieldFragment = /* GraphQL */ `
  ... on TextAreaField {
    adminLabel
    canPrepopulate
    conditionalLogic {
      ${conditionalLogicFragment}
    }
    cssClass
    defaultValue
    description
    descriptionPlacement
    errorMessage
    inputName
    isRequired
    label
    maxLength
    shouldAllowDuplicates
    placeholder
    size
    hasRichTextEditor
    value
  }
`;
