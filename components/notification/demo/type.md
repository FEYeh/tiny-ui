<demo>

### Different types of notification

A notification box with a icon at the left side.

```jsx live
() => {
  const btnOnClick = (type) => {
    Notification[type]({
      title: 'Notification Title',
      description: 'This is the content of the notification. This is the content of the notification.',
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };
  
  return (
    <>
      <Button color="blue" onClick={() => btnOnClick('info')}>Info</Button>
      <Button color="green" onClick={() => btnOnClick('success')}>Success</Button>
      <Button color="yellow" onClick={() => btnOnClick('warning')}>Warning</Button>
      <Button color="red" onClick={() => btnOnClick('error')}>Error</Button>
    </>
  );
}
```

</demo>
