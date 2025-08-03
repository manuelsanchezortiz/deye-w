import { gettext } from 'i18n';

AppSettingsPage({
    state: {
        url: "",
        appId: "",
        appSecret: "",
        password: "",
        apiKey: "",
        plantId: "",
        stationId: "",
        deviceSn: "",
        email: "",
    },

    build(props) { 
        console.log("Building AppSettingsPage");
    this.state.url = props.settingsStorage.getItem("deye_url") || "";
    this.state.appId = props.settingsStorage.getItem("deye_app_id") || "";
    this.state.appSecret = props.settingsStorage.getItem("deye_app_secret") || "";
    this.state.password = props.settingsStorage.getItem("deye_password") || "";
    this.state.apiKey = props.settingsStorage.getItem("deye_api_key") || "";
    this.state.plantId = props.settingsStorage.getItem("deye_plant_id") || "";
    this.state.stationId = props.settingsStorage.getItem("deye_station_id") || "";
    this.state.deviceSn = props.settingsStorage.getItem("deye_device_sn") || "";
    this.state.email = props.settingsStorage.getItem("deye_email") || "";

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
                    [gettext('deyeSettings')],
                ),

                TextInput({
                    id: "urlInput",
                    label: gettext('urlService'),
                    value: this.state.url,
                    onChange: (value) => {
                        this.state.url = value;
                        props.settingsStorage.setItem("deye_url", this.state.url);
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
                    id: "appIdInput",
                    label: gettext('appId'),
                    value: this.state.appId,
                    onChange: (value) => {
                        this.state.appId = value;
                        props.settingsStorage.setItem("deye_app_id", this.state.appId);
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
                    id: "appSecretInput",
                    label: gettext('appSecret'),
                    value: this.state.appSecret,
                    onChange: (value) => {
                        this.state.appSecret = value;
                        props.settingsStorage.setItem("deye_app_secret", this.state.appSecret);
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
                    label: gettext('password'),
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
                    label: gettext('apiKey'),
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
                    label: gettext('plantId'),
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
                        marginBottom: "12px",
                        border: "1px solid #333",
                        borderRadius: "8px",
                        padding: "0 12px",
                    },
                }),
                TextInput({
                    id: "stationIdInput",
                    label: gettext('stationId'),
                    value: this.state.stationId,
                    onChange: (value) => {
                        this.state.stationId = value;
                        props.settingsStorage.setItem("deye_station_id", this.state.stationId);
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
                    id: "deviceSnInput",
                    label: gettext('deviceSn'),
                    value: this.state.deviceSn,
                    onChange: (value) => {
                        this.state.deviceSn = value;
                        props.settingsStorage.setItem("deye_device_sn", this.state.deviceSn);
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
                    id: "emailInput",
                    label: gettext('email'),
                    value: this.state.email,
                    onChange: (value) => {
                        this.state.email = value;
                        props.settingsStorage.setItem("deye_email", this.state.email);
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
                        console.log(`Clicked appId: ${this.state.appId}`);
                        console.log(`Clicked appSecret: ${this.state.appSecret}`);
                        console.log(`Clicked password: ${this.state.password}`);
                        console.log(`Clicked apiKey: ${this.state.apiKey}`);
                        console.log(`Clicked plantId: ${this.state.plantId}`);
                        console.log(`Clicked stationId: ${this.state.stationId}`);
                        console.log(`Clicked deviceSn: ${this.state.deviceSn}`);
                        console.log(`Clicked email: ${this.state.email}`);
                    },
                }),
            ]
        );
    },
});