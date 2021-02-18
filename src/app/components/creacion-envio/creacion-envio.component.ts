import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-creacion-envio',
  templateUrl: './creacion-envio.component.html',
  styleUrls: ['./creacion-envio.component.css'],
})
export class CreacionEnvioComponent implements OnInit {
  creacionEnvioForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  //Declaro el tipo de formulario:FormGroup

  ngOnInit(): void {
    console.log('Iniciando...');

    this.creacionEnvioForm = this.fb.group({
      NUMERO_ENVIO: ['', Validators.required],
      REFERENCIA: ['12345', Validators.required],
      NUMERO_BULTOS: ['2', Validators.required],
      CODIGO_ADMISION: ['345', Validators.required],
      CLIENTE_REMITENTE: ['900007424', Validators.required],
      CENTRO_REMITENTE: ['01', Validators.required],
      NIF_REMITENTE: ['1-9', Validators.required],
      NOMBRE_REMITENTE: ['TESTFNLNCHILE', Validators.required],
      DIRECCION_REMITENTE: ['LA ESTERA 0575 , 0575 575', Validators.required],
      PAIS_REMITENTE: ['CL', Validators.required],
      CODIGO_POSTAL_REMITENTE: ['9250000', Validators.required],
      POBLACION_REMITENTE: ['MAIPU', Validators.required],
      PERSONA_CONTACTO_REMITENTE: ['SANNCHISS', Validators.required],
      CLIENTE_REFERENCIA: ['CORRELATIVO-0000', Validators.required],
      NIF_DESTINATARIO: ['1-9', Validators.required],
      NOMBRE_DESTINATARIO: ['TEST-DESTINATARIO', Validators.required],
      DIRECCION_DESTINATARIO: [
        'SANTA CATALINA DE CHENA, 1001',
        Validators.required,
      ],
      PAIS_DESTINATARIO: ['CL', Validators.required],
      CODIGO_POSTAL_DESTINATARIO: ['8320000', Validators.required],
      POBLACION_DESTINATARIO: ['SANTIAGO', Validators.required],
      PERSONA_CONTACTO_DESTINATARIO: ['JOHANNA', Validators.required],
      TELEFONO_CONTACTO_DESTINATARIO: ['999999999', Validators.required],
      EMAIL_DESTINATARIO: ['none@none.com', Validators.required],
      KILOS: ['5', Validators.required],
      VOLUMEN: ['0.005', Validators.required],
    });
  }

  creacionEnvio(): any {
    console.log(this.creacionEnvioForm.value);

    var request = require('request');
    var options = {
      method: 'POST',
      url:
        'https://gtstntpre.alertran.net/gts/seam/resource/restv1/auth/documentarEnvio/json',
      headers: {
        Authorization: 'Basic U1BFUkVaOkZlZGV4LjQzMjI=',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        DOCUMENTAR_ENVIOS: {
          DOCUMENTAR_ENVIO: [
            {
              REFERENCIA: '',
              NUMERO_ENVIO: '',
              CODIGO_ADMISION: '345',
              NUMERO_BULTOS: 1,
              CLIENTE_REMITENTE: '900007424',
              CENTRO_REMITENTE: '01',
              NIF_REMITENTE: '96976500-4',
              NOMBRE_REMITENTE: 'TESTFNLNCHILE',
              DIRECCION_REMITENTE: 'SALAR DE ATACAMA 250',
              PAIS_REMITENTE: 'CL',
              CODIGO_POSTAL_REMITENTE: '2960000',
              POBLACION_REMITENTE: 'QUINTA DE TIL COCO',
              PERSONA_CONTACTO_REMITENTE: 'PRUEBA PERSONA CONTACTO',
              TELEFONO_CONTACTO_REMITENTE: '997416303',
              EMAIL_REMITENTE: 'xxxxx@ALERCE-GROUP.COM',
              NIF_DESTINATARIO: '96976500-4',
              NOMBRE_DESTINATARIO: 'PRUEBA DESTINATARIO',
              DIRECCION_DESTINATARIO: 'PRUEBA DIRECCION DESTINO',
              PAIS_DESTINATARIO: 'CL',
              CODIGO_POSTAL_DESTINATARIO: '5880000',
              POBLACION_DESTINATARIO: 'ALTO PALENA  CBST',
              PERSONA_CONTACTO_DESTINATARIO: 'PRUEBA PERSONA CONTACTO',
              TELEFONO_CONTACTO_DESTINATARIO: '997416303',
              EMAIL_DESTINATARIO: 'amora@ALERCE-GROUP.COM',
              CODIGO_PRODUCTO_SERVICIO: '01',
              KILOS: '4',
              VOLUMEN: '0.001',
              CLIENTE_REFERENCIA: '1234-borrar',
              IMPORTE_REEMBOLSO: 0,
              IMPORTE_VALOR_DECLARADO: '0',
              TIPO_PORTES: 'P',
              OBSERVACIONES1: 'PRUEBA OBS1',
              OBSERVACIONES2: 'PRUEBA OBS2',
              TIPO_MERCANCIA: 'P',
              VALOR_MERCANCIA: '0',
              MERCANCIA_ESPECIAL: 'N',
              GRANDES_SUPERFICIES: 'N',
              PLAZO_GARANTIZADO: 'N',
              LOCALIZADOR: '',
              NUM_PALETS: 0,
              FECHA_ENTREGA_APLAZADA: '',
              ENTREGA_APLAZADA: 'N',
              TIPOS_DOCUMENTO: [
                { TIPO: 'FACT', REFERENCIA: '123' },
                { TIPO: 'GD', REFERENCIA: '456' },
              ],
              GESTION_DEVOLUCION_CONFORME: 'N',
              ENVIO_CON_RECOGIDA: 'N',
              IMPRIMIR_ETIQUETA: 'N',
              ENVIO_DEFINITIVO: 'N',
              TIPO_FORMATO: 'EPL',
            },
          ],
        },
      }),
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
    });
  }
}
