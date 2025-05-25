export type Handler<E = React.SyntheticEvent> = (event: E) => void;

export function composeEventHandlers<E extends React.SyntheticEvent = React.SyntheticEvent>(
  userHandler: Handler<E> | undefined,
  internalHandler: Handler<E>,
  { checkDefaultPrevented = true } = {}
): Handler<E> {
  return (evt) => {
    userHandler?.(evt);

    if (!checkDefaultPrevented || !evt.defaultPrevented) {
      internalHandler(evt);
    }
  };
}
