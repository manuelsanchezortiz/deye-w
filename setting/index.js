AppSettingsPage({
    state: {
        url: "",
        username: "",
        password: "",
        apiKey: "",
        plantId: "",
    },

    build(props) {
        console.log("Building AppSettingsPage");
        this.state.url = props.settingsStorage.getItem("deye_url") || "";
        this.state.username = props.settingsStorage.getItem("deye_username") || "";
        this.state.password = props.settingsStorage.getItem("deye_password") || "";
        this.state.apiKey = props.settingsStorage.getItem("deye_api_key") || "";
        this.state.plantId = props.settingsStorage.getItem("deye_plant_id") || "";

        return View(
            {
                style: {
                    padding: "24px 20px",
                    backgroundColor: "#000", // Black theme background
                    minHeight: "100vh",
                },
            },
            [
                Text(
                    {
                        style: {
                            fontSize: "24px",
                            color: "#fff",
                            marginBottom: "20px",
                            fontWeight: "bold",
                            letterSpacing: "1px",
                        },
                    },
                    ["Configuración Deye"]
                ),

                TextInput({
                    id: "urlInput",
                    label: "URL del servicio:",
                    value: this.state.url,
                    onChange: (value) => {
                        this.state.url = value;
                        props.settingsStorage.setItem("deye_url", this.state.url);
                    },
                    labelStyle: {
                       color: "#fff" // Set label text to white
                    },
                    style: {
                        width: "100%",
                        height: "40px",
                        backgroundColor: "#222", // Slightly lighter black
                        color: "#fff",
                        marginBottom: "12px",
                        border: "1px solid #333",
                        borderRadius: "8px",
                        padding: "0 12px",
                    },
                }),
                TextInput({
                    id: "usernameInput",
                    label: "Nombre de usuario:",
                    value: this.state.username,
                    onChange: (value) => {
                        this.state.username = value;
                        props.settingsStorage.setItem("deye_username", this.state.username);
                    },
                    labelStyle: {
                        color: "#fff"
                    },
                    style: {
                        width: "100%",
                        height: "40px",
                        backgroundColor: "#222",
                        color: "#fff",
                        marginBottom: "12px",
                        border: "1px solid #333",
                        borderRadius: "8px",
                        padding: "0 12px",
                    },
                }),
                TextInput({
                    id: "passwordInput",
                    label: "Contraseña:",
                    value: this.state.password,
                    onChange: (value) => {
                        this.state.password = value;
                        props.settingsStorage.setItem("deye_password", this.state.password);
                    },
                    labelStyle: {
                        color: "#fff"
                    },
                    style: {
                        width: "100%",
                        height: "40px",
                        backgroundColor: "#222",
                        color: "#fff",
                        marginBottom: "12px",
                        border: "1px solid #333",
                        borderRadius: "8px",
                        padding: "0 12px",
                    },
                }),
                TextInput({
                    id: "apiKeyInput",
                    label: "API Key:",
                    value: this.state.apiKey,
                    onChange: (value) => {
                        this.state.apiKey = value;
                        props.settingsStorage.setItem("deye_api_key", this.state.apiKey);
                    },
                    labelStyle: {
                        color: "#fff"
                    },
                    style: {
                        width: "100%",
                        height: "40px",
                        backgroundColor: "#222",
                        color: "#fff",
                        marginBottom: "12px",
                        border: "1px solid #333",
                        borderRadius: "8px",
                        padding: "0 12px",
                    },
                }),
                TextInput({
                    id: "plantIdInput",
                    label: "Plant Id:",
                    value: this.state.plantId,
                    onChange: (value) => {
                        this.state.plantId = value;
                        props.settingsStorage.setItem("deye_plant_id", this.state.plantId);
                    },
                    labelStyle: {
                        color: "#fff"
                    },
                    style: {
                        width: "100%",
                        height: "40px",
                        backgroundColor: "#222",
                        color: "#fff",
                        marginBottom: "24px",
                        border: "1px solid #333",
                        borderRadius: "8px",
                        padding: "0 12px",
                    },
                }),

                Button({
                    label: "Apply",
                    style: {
                        fontSize: "14px",
                        borderRadius: "30px",
                        background: "#D85E33", // Orange
                        color: "#fff",
                        fontWeight: "bold",
                        padding: "12px 32px",
                        border: "none",
                        boxShadow: "0 2px 8px rgba(216,94,51,0.15)",
                        cursor: "pointer",
                        marginTop: "8px",
                    },
                    onClick: () => {
                        console.log(`Clicked url: ${this.state.url}`);
                        console.log(`Clicked username: ${this.state.username}`);
                        console.log(`Clicked password: ${this.state.password}`);
                        console.log(`Clicked apiKey: ${this.state.apiKey}`);
                        console.log(`Clicked plantId: ${this.state.plantId}`);
                    },
                }),
            ]
        );
    },
});