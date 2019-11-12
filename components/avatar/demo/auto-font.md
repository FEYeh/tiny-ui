<demo>

### Auto set font size

For letter type Avatar, when the letters are too long to display, the font size can be automatically adjusted according to the width of the Avatar.

```jsx live
() => {
  const UserList = ['A', 'Tom', 'Jack', 'Stuart', 'UUUUUUUU'];
  const colorList = ['#7265e6', '#f56a00', '#ffbf00', '#00a2ae', '#f56a00'];

  const [user, setUser] = React.useState(UserList[0]);
  const [color, setColor] = React.useState(colorList[0]);

  const changeUser = () => {
    const idx = UserList.indexOf(user);
    setUser(idx < UserList.length - 1 ? UserList[idx + 1] : UserList[0]);
    setColor(idx < colorList.length - 1 ? colorList[idx + 1] : colorList[0]);
  };

  return (
    <div>
      <Avatar size={50} style={{ backgroundColor: color, marginRight: 15 }}>
        {user}
      </Avatar>
      <Button size="sm" onClick={changeUser}>
        Change
      </Button>
    </div>
  );
};
```

</demo>
