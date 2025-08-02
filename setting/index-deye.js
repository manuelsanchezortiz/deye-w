//import { AppSettingsPage } from '@zeppos/zml/app-settings';
import {
  Text,
  TextInput,
  Button
} from '@zeppos/zml/ui';

AppSettingsPage({
  state: {
    url: null,
    username: null,
    password: null,
    apiKey: null
  },

  build(props) {
    // Cargar los valores guardados al iniciar la página
    this.state.url = props.settingsStorage.getItem('deye_url');
    this.state.username = props.settingsStorage.getItem('deye_username');
    this.state.password = props.settingsStorage.getItem('deye_password');
    this.state.apiKey = props.settingsStorage.getItem('deye_api_key');

    return new Render([
      Text({
        label: 'Configuración Deye',
        style: {
          fontSize: '24px',
          color: '#ffffff',
          marginBottom: '20px',
        }
      }),
      Text({
        label: 'URL del servicio:',
        style: {
          fontSize: '16px',
          color: '#cccccc',
        }
      }),
      TextInput({
        id: 'urlInput',
        value: this.state.url,
        onChange: (value) => {
          this.state.url = value;
        },
        style: {
          width: '100%',
          height: '40px',
          backgroundColor: '#333333',
          color: '#ffffff',
          marginBottom: '10px'
        }
      }),

      Text({
        label: 'Nombre de usuario:',
        style: {
          fontSize: '16px',
          color: '#cccccc',
        }
      }),
      TextInput({
        id: 'usernameInput',
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

      Text({
        label: 'Contraseña:',
        style: {
          fontSize: '16px',
          color: '#cccccc',
        }
      }),
      TextInput({
        id: 'passwordInput',
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

      Text({
        label: 'API Key:',
        style: {
          fontSize: '16px',
          color: '#cccccc',
        }
      }),
      TextInput({
        id: 'apiKeyInput',
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
        label: 'Guardar Configuración',
        onClick: () => {
          // Guardar todos los valores en el almacenamiento de configuración
          props.settingsStorage.setItem('deye_url', this.state.url);
          props.settingsStorage.setItem('deye_username', this.state.username);
          props.settingsStorage.setItem('deye_password', this.state.password);
          props.settingsStorage.setItem('deye_api_key', this.state.apiKey);
          console.log('Datos de conexión Deye guardados.');
        },
        style: {
          marginTop: '20px',
          backgroundColor: '#007aff',
          color: '#ffffff'
        }
      })
    ]);
  }
});