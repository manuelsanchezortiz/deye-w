AppSettingsPage({

    state: {
        url: "",
        username: "",
        password: "",
        apiKey: ""
    },

    build(props) {
        console.log("Building AppSettingsPage");
        this.state.url = props.settingsStorage.getItem('deye_url') || "";
        this.state.username = props.settingsStorage.getItem('deye_username') || "";
        this.state.password = props.settingsStorage.getItem('deye_password') || "";
        this.state.apiKey = props.settingsStorage.getItem('deye_api_key') || "";

        return View(
            {
                style: {
                    padding: '12px 20px'
                }
            },
            [
                Text({
                    style: {
                        fontSize: '24px',
                        color: '#0e0000ff',
                        marginBottom: '20px',
                    }
                }, ['Configuración Deye']),

                TextInput({
                    id: 'urlInput',
                    label: `URL del servicio: ${this.state.url}`,
                    value: this.state.url,
                    onChange: (value) => {
                        this.state.url = value;
                        props.settingsStorage.setItem('deye_url', this.state.url);
                    },
                    style: {
                        width: '100%',
                        height: '40px',
                        backgroundColor: '#333333',
                        color: '#ffffff',
                        marginBottom: '10px'
                    }
                }),
                TextInput({
                    id: 'usernameInput',
                    label: 'Nombre de usuario:',
                    value: this.state.username,
                    onChange: (value) => {
                        this.state.username = value;
                    },
                    style: {
                        width: '100%',
                        height: '40px',
                        backgroundColor: '#333333',
                        color: '#ffffff',
                        marginBottom: '10px'
                    }
                }),
                TextInput({
                    id: 'passwordInput',
                    label: 'Contraseña:',
                    value: this.state.password,
                    onChange: (value) => {
                        this.state.password = value;
                    },
                    style: {
                        width: '100%',
                        height: '40px',
                        backgroundColor: '#333333',
                        color: '#ffffff',
                        marginBottom: '10px'
                    }
                }),
                TextInput({
                    id: 'apiKeyInput',
                    label: 'API Key:',
                    value: this.state.apiKey,
                    onChange: (value) => {
                        this.state.apiKey = value;
                    },
                    style: {
                        width: '100%',
                        height: '40px',
                        backgroundColor: '#333333',
                        color: '#ffffff',
                        marginBottom: '10px'
                    }
                }),

                Button({
                    label: 'Save Settings',
                    style: {
                        fontSize: '12px',
                        borderRadius: '30px',
                        background: '#D85E33',
                        color: 'white'
                    },
                    onClick: () => { 
                        props.settingsStorage.setItem('deye_url', this.state.url);
                        props.settingsStorage.setItem('deye_username', this.state.username);
                        props.settingsStorage.setItem('deye_password', this.state.password);
                        props.settingsStorage.setItem('deye_api_key', this.state.apiKey);
                        console.log(`Clicked url: ${this.state.url}`);
                        console.log(`Clicked username: ${this.state.username}`);
                        console.log(`Clicked password: ${this.state.password}`);
                        console.log(`Clicked apiKey: ${this.state.apiKey}`);
                        //props.build(props)
                    }
                })
            ]);
    }
})