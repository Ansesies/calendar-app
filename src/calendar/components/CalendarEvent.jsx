

export const CalendarEvent = ({event}) => {

    const { title, user } = event;

    if (!user) {
      return null;
    }
   


  return (
    <>
        <strong>{ title }</strong>
        <strong> - { user.name }</strong>

    </>
  )
}
