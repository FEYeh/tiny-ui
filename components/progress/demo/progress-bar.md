<demo>

### Progress bar

A standard progress bar.

```jsx live
() => {
  const { Bar } = Progress;
  
  return (
    <div>
      <Bar percent={10} />
      <Bar percent={30} strokeColor="yellow"/>
      <Bar percent={50} strokeColor="green"/>
      <Bar percent={70} strokeColor="red"/>
      <Bar percent={100} strokeColor="blue"/>
      <Bar percent={100} strokeColor="blue" showInfo={false} style={{ marginTop: 5 }}/>
    </div>
  );
}
```

</demo>
