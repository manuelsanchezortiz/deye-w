AppSettingsPage({
  build(props) {
    return Button({
      label: 'Delete',
      style: {
        fontSize: '12px',
        borderRadius: '30px',
        background: '#D85E33',
        color: 'white'
      },
      onClick: () => {
        console.log("Clicked settings delete button")
      }
    })
  }
})