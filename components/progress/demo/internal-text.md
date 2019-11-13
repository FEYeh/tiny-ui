<demo>

### Internal Text

Set `innerText` to display the text inside the bar.

```jsx live
() => {
  const { Bar } = Progress;
  
  return (
    <div>
      <Bar percent={0} innerText strokeWidth={15} style={{marginBottom: 10}}/>
      <Bar percent={30} strokeColor="yellow" innerText strokeWidth={15} style={{marginBottom: 10}}/>
      <Bar percent={50} strokeColor="green" innerText strokeWidth={15} style={{marginBottom: 10}}/>
      <Bar percent={70} strokeColor="red" innerText strokeWidth={15} style={{marginBottom: 10}}/>
      <Bar percent={100} strokeColor="blue" innerText strokeWidth={15} style={{marginBottom: 10}}/>
    </div>
  );
}
```

</demo>
