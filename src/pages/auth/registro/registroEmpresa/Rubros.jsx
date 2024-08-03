import React from "react";

const Rubros = () => {
  const htmlString = `
     <table class="table table-bordered">
      <thead>
        <tr>
          <th colspan="5">
            <a name="1">
              <font color="#000000">
                AGRICULTURA, GANADER&Iacute;A, SILVICULTURA Y PESCA
              </font>
            </a>
          </th>
        </tr>
        <tr height="40">
          <td width="48" height="40">
            C&oacute;digo
          </td>
          <td width="936">
            {" "}
            <strong>CULTIVO DE PLANTAS NO PERENNES</strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">011101</td>
          <td>CULTIVO DE TRIGO</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">011102</td>
          <td>CULTIVO DE MA&Iacute;Z</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">011103</td>
          <td>CULTIVO DE AVENA</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">011104</td>
          <td>CULTIVO DE CEBADA</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">011105</td>
          <td>
            CULTIVO DE OTROS CEREALES (EXCEPTO TRIGO, MA&Iacute;Z, AVENA Y
            CEBADA)
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">011106</td>
          <td>CULTIVO DE POROTOS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">011107</td>
          <td>CULTIVO DE LUPINO</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">011108</td>
          <td>CULTIVO DE OTRAS LEGUMBRES (EXCEPTO POROTOS Y LUPINO)</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">011109</td>
          <td>CULTIVO DE SEMILLAS DE RAPS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">011110</td>
          <td>CULTIVO DE SEMILLAS DE MARAVILLA (GIRASOL)</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">011111</td>
          <td>
            CULTIVO DE SEMILLAS DE CEREALES, LEGUMBRES Y OLEAGINOSAS (EXCEPTO
            SEMILLAS DE RAPS Y MARAVILLA)
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">011200</td>
          <td>CULTIVO DE ARROZ</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">011301</td>
          <td>CULTIVO DE PAPAS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">011302</td>
          <td>CULTIVO DE CAMOTES</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">011303</td>
          <td>CULTIVO DE OTROS TUB&Eacute;RCULOS (EXCEPTO PAPAS Y CAMOTES)</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">011304</td>
          <td>CULTIVO DE REMOLACHA AZUCARERA</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">011305</td>
          <td>CULTIVO DE SEMILLAS DE HORTALIZAS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">011306</td>
          <td>CULTIVO DE HORTALIZAS Y MELONES&nbsp;</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">011400</td>
          <td>CULTIVO DE CA&Ntilde;A DE AZ&Uacute;CAR</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">011500</td>
          <td>CULTIVO DE TABACO</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">011600</td>
          <td>CULTIVO DE PLANTAS DE FIBRA</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">011901</td>
          <td>CULTIVO DE FLORES</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">011902</td>
          <td>
            CULTIVOS FORRAJEROS EN PRADERAS MEJORADAS O SEMBRADAS; CULTIVOS
            SUPLEMENTARIOS FORRAJEROS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">011903</td>
          <td>
            CULTIVOS DE SEMILLAS DE FLORES; CULTIVO DE SEMILLAS DE PLANTAS
            FORRAJERAS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>CULTIVO DE PLANTAS PERENNES</strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">012111</td>
          <td>
            CULTIVO DE UVA DESTINADA A LA PRODUCCI&Oacute;N DE PISCO Y
            AGUARDIENTE
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">012112</td>
          <td>CULTIVO DE UVA DESTINADA A LA PRODUCCI&Oacute;N DE VINO</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">012120</td>
          <td>CULTIVO DE UVA PARA MESA</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">012200</td>
          <td>
            CULTIVO DE FRUTAS TROPICALES Y SUBTROPICALES (INCLUYE EL CULTIVO DE
            PALTAS)
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">012300</td>
          <td>CULTIVO DE C&Iacute;TRICOS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">012400</td>
          <td>CULTIVO DE FRUTAS DE PEPITA Y DE HUESO</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">012501</td>
          <td>CULTIVO DE SEMILLAS DE FRUTAS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">012502</td>
          <td>CULTIVO DE OTROS FRUTOS Y NUECES DE &Aacute;RBOLES Y ARBUSTOS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">012600</td>
          <td>
            CULTIVO DE FRUTOS OLEAGINOSOS (INCLUYE EL CULTIVO DE ACEITUNAS)
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">012700</td>
          <td>
            CULTIVO DE PLANTAS CON LAS QUE SE PREPARAN BEBIDAS (INCLUYE EL
            CULTIVO DE CAF&Eacute;, T&Eacute; Y MATE)
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">012801</td>
          <td>CULTIVO DE ESPECIAS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">012802</td>
          <td>
            CULTIVO DE PLANTAS AROM&Aacute;TICAS, MEDICINALES Y
            FARMAC&Eacute;UTICAS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">012900</td>
          <td>CULTIVO DE OTRAS PLANTAS PERENNES</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>PROPAGACI&Oacute;N DE PLANTAS</strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">013000</td>
          <td>
            CULTIVO DE PLANTAS VIVAS INCLUIDA LA PRODUCCI&Oacute;N EN VIVEROS
            (EXCEPTO VIVEROS FORESTALES)
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>GANADER&Iacute;A&nbsp;</strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">014101</td>
          <td>
            CR&Iacute;A DE GANADO BOVINO PARA LA PRODUCCI&Oacute;N LECHERA
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">014102</td>
          <td>
            CR&Iacute;A DE GANADO BOVINO PARA LA PRODUCCI&Oacute;N DE CARNE O
            COMO GANADO REPRODUCTOR
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">014200</td>
          <td>CR&Iacute;A DE CABALLOS Y OTROS EQUINOS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">014300</td>
          <td>
            CR&Iacute;A DE LLAMAS, ALPACAS, VICU&Ntilde;AS, GUANACOS Y OTROS
            CAM&Eacute;LIDOS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">014410</td>
          <td>CR&Iacute;A DE OVEJAS (OVINOS)</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">014420</td>
          <td>CR&Iacute;A DE CABRAS (CAPRINOS)</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">014500</td>
          <td>CR&Iacute;A DE CERDOS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">014601</td>
          <td>
            CR&Iacute;A DE AVES DE CORRAL PARA LA PRODUCCI&Oacute;N DE CARNE
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">014602</td>
          <td>
            CR&Iacute;A DE AVES DE CORRAL PARA LA PRODUCCI&Oacute;N DE HUEVOS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">014901</td>
          <td>APICULTURA</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">014909</td>
          <td>CR&Iacute;A DE OTROS ANIMALES N.C.P.</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              CULTIVO DE PRODUCTOS AGR&Iacute;COLAS EN COMBINACI&Oacute;N CON LA
              CR&Iacute;A DE ANIMALES&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">015000</td>
          <td>
            CULTIVO DE PRODUCTOS AGR&Iacute;COLAS EN COMBINACI&Oacute;N CON LA
            CR&Iacute;A DE ANIMALES (EXPLOTACI&Oacute;N MIXTA)
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="49">C&oacute;digo</td>
          <td>
            <strong>
              ACTIVIDADES DE APOYO A LA AGRICULTURA Y LA GANADER&Iacute;A Y
              ACTIVIDADES POSCOSECHA&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">016100</td>
          <td>ACTIVIDADES DE APOYO A LA AGRICULTURA</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">016200</td>
          <td>ACTIVIDADES DE APOYO A LA GANADER&Iacute;A</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">016300</td>
          <td>ACTIVIDADES POSCOSECHA</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">016400</td>
          <td>TRATAMIENTO DE SEMILLAS PARA PROPAGACI&Oacute;N</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              CAZA ORDINARIA Y MEDIANTE TRAMPAS Y ACTIVIDADES DE SERVICIOS
              CONEXAS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">017000</td>
          <td>
            CAZA ORDINARIA Y MEDIANTE TRAMPAS Y ACTIVIDADES DE SERVICIOS CONEXAS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              SILVICULTURA Y OTRAS ACTIVIDADES
              FORESTALES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">021001</td>
          <td>EXPLOTACI&Oacute;N DE VIVEROS FORESTALES</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">021002</td>
          <td>
            SILVICULTURA Y OTRAS ACTIVIDADES FORESTALES (EXCEPTO
            EXPLOTACI&Oacute;N DE VIVEROS FORESTALES)
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              EXTRACCI&Oacute;N DE
              MADERA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">022000</td>
          <td>EXTRACCI&Oacute;N DE MADERA</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              RECOLECCI&Oacute;N DE PRODUCTOS FORESTALES DISTINTOS DE LA
              MADERA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">023000</td>
          <td>
            RECOLECCI&Oacute;N DE PRODUCTOS FORESTALES DISTINTOS DE LA MADERA
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              SERVICIOS DE APOYO A LA
              SILVICULTURA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">024001</td>
          <td>
            SERVICIOS DE FORESTACI&Oacute;N A CAMBIO DE UNA RETRIBUCI&Oacute;N O
            POR CONTRATA
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">024002</td>
          <td>
            SERVICIOS DE CORTA DE MADERA A CAMBIO DE UNA RETRIBUCI&Oacute;N O
            POR CONTRATA
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">024003</td>
          <td>
            SERVICIOS DE EXTINCI&Oacute;N Y PREVENCI&Oacute;N DE INCENDIOS
            FORESTALES
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">024009</td>
          <td>OTROS SERVICIOS DE APOYO A LA SILVICULTURA N.C.P.</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              PESCA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">031110</td>
          <td>
            PESCA MAR&Iacute;TIMA INDUSTRIAL, EXCEPTO DE BARCOS FACTOR&Iacute;A
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">031120</td>
          <td>PESCA MAR&Iacute;TIMA ARTESANAL</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">031130</td>
          <td>RECOLECCI&Oacute;N Y EXTRACCI&Oacute;N DE PRODUCTOS MARINOS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">031140</td>
          <td>SERVICIOS RELACIONADOS CON LA PESCA MAR&Iacute;TIMA</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">031200</td>
          <td>PESCA DE AGUA DULCE</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              ACUICULTURA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">032110</td>
          <td>CULTIVO Y CRIANZA DE PECES MARINOS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">032120</td>
          <td>CULTIVO, REPRODUCCI&Oacute;N Y MANEJO DE ALGAS MARINAS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">032130</td>
          <td>
            REPRODUCCI&Oacute;N Y CR&Iacute;A DE MOLUSCOS, CRUST&Aacute;CEOS Y
            GUSANOS MARINOS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">032140</td>
          <td>SERVICIOS RELACIONADOS CON LA ACUICULTURA MARINA</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">032200</td>
          <td>ACUICULTURA DE AGUA DULCE</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <th colspan="5">
            <a name="2">
              <font color="#000000">
                EXPLOTACI&Oacute;N DE MINAS Y CANTERAS
              </font>
            </a>
          </th>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              EXTRACCI&Oacute;N Y PROCESAMIENTO DE
              COBRE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">040000</td>
          <td>EXTRACCI&Oacute;N Y PROCESAMIENTO DE COBRE</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              EXTRACCI&Oacute;N DE CARB&Oacute;N DE
              PIEDRA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">051000</td>
          <td>EXTRACCI&Oacute;N DE CARB&Oacute;N DE PIEDRA</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              EXTRACCI&Oacute;N DE
              LIGNITO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">052000</td>
          <td>EXTRACCI&Oacute;N DE LIGNITO</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              EXTRACCI&Oacute;N DE PETR&Oacute;LEO
              CRUDO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">061000</td>
          <td>EXTRACCI&Oacute;N DE PETR&Oacute;LEO CRUDO</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              EXTRACCI&Oacute;N DE GAS
              NATURAL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">062000</td>
          <td>EXTRACCI&Oacute;N DE GAS NATURAL</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              EXTRACCI&Oacute;N DE MINERALES DE
              HIERRO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">071000</td>
          <td>EXTRACCI&Oacute;N DE MINERALES DE HIERRO</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">072100</td>
          <td>EXTRACCI&Oacute;N DE MINERALES DE URANIO Y TORIO</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">072910</td>
          <td>EXTRACCI&Oacute;N DE ORO Y PLATA</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">072991</td>
          <td>EXTRACCI&Oacute;N DE ZINC Y PLOMO</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">072992</td>
          <td>EXTRACCI&Oacute;N DE MANGANESO</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">072999</td>
          <td>
            EXTRACCI&Oacute;N DE OTROS MINERALES METAL&Iacute;FEROS NO FERROSOS
            N.C.P. (EXCEPTO ZINC, PLOMO Y MANGANESO)
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              EXTRACCI&Oacute;N DE PIEDRA, ARENA Y
              ARCILLA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">081000</td>
          <td>EXTRACCI&Oacute;N DE PIEDRA, ARENA Y ARCILLA</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              EXPLOTACI&Oacute;N DE MINAS Y CANTERAS
              N.C.P.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">089110</td>
          <td>EXTRACCI&Oacute;N Y PROCESAMIENTO DE LITIO</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">089190</td>
          <td>
            EXTRACCI&Oacute;N DE MINERALES PARA LA FABRICACI&Oacute;N DE ABONOS
            Y PRODUCTOS QU&Iacute;MICOS N.C.P.
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">089200</td>
          <td>EXTRACCI&Oacute;N DE TURBA</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">089300</td>
          <td>EXTRACCI&Oacute;N DE SAL</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">089900</td>
          <td>EXPLOTACI&Oacute;N DE OTRAS MINAS Y CANTERAS N.C.P.</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              ACTIVIDADES DE APOYO PARA LA EXTRACCI&Oacute;N DE PETR&Oacute;LEO
              Y GAS
              NATURAL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">091001</td>
          <td>
            ACTIVIDADES DE APOYO PARA LA EXTRACCI&Oacute;N DE PETR&Oacute;LEO Y
            GAS NATURAL PRESTADOS POR EMPRESAS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">091002</td>
          <td>
            ACTIVIDADES DE APOYO PARA LA EXTRACCI&Oacute;N DE PETR&Oacute;LEO Y
            GAS NATURAL PRESTADOS POR PROFESIONALES
          </td>
          <td>G</td>
          <td>G</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              ACTIVIDADES DE APOYO PARA LA EXPLOTACI&Oacute;N DE OTRAS MINAS Y
              CANTERAS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">099001</td>
          <td>
            ACTIVIDADES DE APOYO PARA LA EXPLOTACI&Oacute;N DE OTRAS MINAS Y
            CANTERAS PRESTADOS POR EMPRESAS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">099002</td>
          <td>
            ACTIVIDADES DE APOYO PARA LA EXPLOTACI&Oacute;N DE OTRAS MINAS Y
            CANTERAS PRESTADOS POR PROFESIONALES
          </td>
          <td>G</td>
          <td>G</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <th colspan="5">
            <a name="3">
              <font color="#000000">INDUSTRIA MANUFACTURERA</font>
            </a>
          </th>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              ELABORACI&Oacute;N Y CONSERVACI&Oacute;N DE
              CARNE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">101011</td>
          <td>
            EXPLOTACI&Oacute;N DE MATADEROS DE BOVINOS, OVINOS, EQUINOS,
            CAPRINOS, PORCINOS Y CAM&Eacute;LIDOS&nbsp;
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">101019</td>
          <td>
            EXPLOTACI&Oacute;N DE MATADEROS DE AVES Y DE OTROS TIPOS DE ANIMALES
            N.C.P.
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">101020</td>
          <td>
            ELABORACI&Oacute;N Y CONSERVACI&Oacute;N DE CARNE Y PRODUCTOS
            C&Aacute;RNICOS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              ELABORACI&Oacute;N Y CONSERVACI&Oacute;N DE PESCADO,
              CRUST&Aacute;CEOS Y
              MOLUSCOS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">102010</td>
          <td>PRODUCCI&Oacute;N DE HARINA DE PESCADO</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">102020</td>
          <td>ELABORACI&Oacute;N Y CONSERVACI&Oacute;N DE SALM&Oacute;NIDOS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">102030</td>
          <td>
            ELABORACI&Oacute;N Y CONSERVACI&Oacute;N DE OTROS PESCADOS, EN
            PLANTAS EN TIERRA (EXCEPTO BARCOS FACTOR&Iacute;A)
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">102040</td>
          <td>
            ELABORACI&Oacute;N Y CONSERVACI&Oacute;N DE CRUST&Aacute;CEOS,
            MOLUSCOS Y OTROS PRODUCTOS ACU&Aacute;TICOS, EN PLANTAS EN TIERRA
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">102050</td>
          <td>
            ACTIVIDADES DE ELABORACI&Oacute;N Y CONSERVACI&Oacute;N DE PESCADO,
            REALIZADAS EN BARCOS FACTOR&Iacute;A
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">102060</td>
          <td>ELABORACI&Oacute;N Y PROCESAMIENTO DE ALGAS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              ELABORACI&Oacute;N Y CONSERVACI&Oacute;N DE FRUTAS, LEGUMBRES Y
              HORTALIZAS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">103000</td>
          <td>
            ELABORACI&Oacute;N Y CONSERVACI&Oacute;N DE FRUTAS, LEGUMBRES Y
            HORTALIZAS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              ELABORACI&Oacute;N DE ACEITES Y GRASAS DE ORIGEN VEGETAL Y
              ANIMAL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">104000</td>
          <td>
            ELABORACI&Oacute;N DE ACEITES Y GRASAS DE ORIGEN VEGETAL Y ANIMAL
            (EXCEPTO ELABORACI&Oacute;N DE MANTEQUILLA)
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              ELABORACI&Oacute;N DE PRODUCTOS
              L&Aacute;CTEOS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">105000</td>
          <td>ELABORACI&Oacute;N DE PRODUCTOS L&Aacute;CTEOS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              ELABORACI&Oacute;N DE PRODUCTOS DE MOLINER&Iacute;A, ALMIDONES Y
              PRODUCTOS DERIVADOS DEL
              ALMID&Oacute;N&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">106101</td>
          <td>
            MOLIENDA DE TRIGO: PRODUCCI&Oacute;N DE HARINA, S&Eacute;MOLA Y
            GR&Aacute;NULOS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">106102</td>
          <td>MOLIENDA DE ARROZ; PRODUCCI&Oacute;N DE HARINA DE ARROZ</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">106109</td>
          <td>
            ELABORACI&Oacute;N DE OTROS PRODUCTOS DE MOLINER&Iacute;A N.C.P.
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">106200</td>
          <td>
            ELABORACI&Oacute;N DE ALMIDONES Y PRODUCTOS DERIVADOS DEL
            ALMID&Oacute;N
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              ELABORACI&Oacute;N DE OTROS PRODUCTOS
              ALIMENTICIOS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">107100</td>
          <td>
            ELABORACI&Oacute;N DE PRODUCTOS DE PANADER&Iacute;A Y
            PASTELER&Iacute;A
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">107200</td>
          <td>ELABORACI&Oacute;N DE AZ&Uacute;CAR</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">107300</td>
          <td>
            ELABORACI&Oacute;N DE CACAO, CHOCOLATE Y DE PRODUCTOS DE
            CONFITER&Iacute;A
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">107400</td>
          <td>
            ELABORACI&Oacute;N DE MACARRONES, FIDEOS, ALCUZCUZ Y PRODUCTOS
            FARIN&Aacute;CEOS SIMILARES
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">107500</td>
          <td>
            ELABORACI&Oacute;N DE COMIDAS Y PLATOS PREPARADOS ENVASADOS,
            ROTULADOS Y CON INFORMACI&Oacute;N NUTRICIONAL
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">107901</td>
          <td>
            ELABORACI&Oacute;N DE T&Eacute;, CAF&Eacute;, MATE E INFUSIONES DE
            HIERBAS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">107902</td>
          <td>ELABORACI&Oacute;N DE LEVADURAS NATURALES O ARTIFICIALES</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">107903</td>
          <td>
            ELABORACI&Oacute;N DE VINAGRES, MOSTAZAS, MAYONESAS Y CONDIMENTOS EN
            GENERAL
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">107909</td>
          <td>ELABORACI&Oacute;N DE OTROS PRODUCTOS ALIMENTICIOS N.C.P.</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              ELABORACI&Oacute;N DE PIENSOS PREPARADOS PARA
              ANIMALES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">108000</td>
          <td>ELABORACI&Oacute;N DE PIENSOS PREPARADOS PARA ANIMALES</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              ELABORACI&Oacute;N DE BEBIDAS ALCOH&Oacute;LICAS Y NO
              ALCOH&Oacute;LICAS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">110110</td>
          <td>ELABORACI&Oacute;N DE PISCO (INDUSTRIAS PISQUERAS)</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">110120</td>
          <td>
            DESTILACI&Oacute;N, RECTIFICACI&Oacute;N Y MEZCLAS DE BEBIDAS
            ALCOH&Oacute;LICAS; EXCEPTO PISCO
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">110200</td>
          <td>ELABORACI&Oacute;N DE VINOS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">110300</td>
          <td>ELABORACI&Oacute;N DE BEBIDAS MALTEADAS Y DE MALTA</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">110401</td>
          <td>ELABORACI&Oacute;N DE BEBIDAS NO ALCOH&Oacute;LICAS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">110402</td>
          <td>
            PRODUCCI&Oacute;N DE AGUAS MINERALES Y OTRAS AGUAS EMBOTELLADAS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              ELABORACI&Oacute;N DE PRODUCTOS DE
              TABACO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">120001</td>
          <td>ELABORACI&Oacute;N DE CIGARROS Y CIGARRILLOS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">120009</td>
          <td>ELABORACI&Oacute;N DE OTROS PRODUCTOS DE TABACO N.C.P.</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              HILATURA, TEJEDURA Y ACABADO DE PRODUCTOS
              TEXTILES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">131100</td>
          <td>PREPARACI&Oacute;N E HILATURA DE FIBRAS TEXTILES</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">131200</td>
          <td>TEJEDURA DE PRODUCTOS TEXTILES</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">131300</td>
          <td>ACABADO DE PRODUCTOS TEXTILES</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              FABRICACI&Oacute;N DE OTROS PRODUCTOS
              TEXTILES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">139100</td>
          <td>FABRICACI&Oacute;N DE TEJIDOS DE PUNTO Y GANCHILLO</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">139200</td>
          <td>
            FABRICACI&Oacute;N DE ART&Iacute;CULOS CONFECCIONADOS DE MATERIALES
            TEXTILES, EXCEPTO PRENDAS DE VESTIR
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">139300</td>
          <td>FABRICACI&Oacute;N DE TAPICES Y ALFOMBRAS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">139400</td>
          <td>FABRICACI&Oacute;N DE CUERDAS, CORDELES, BRAMANTES Y REDES</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">139900</td>
          <td>FABRICACI&Oacute;N DE OTROS PRODUCTOS TEXTILES N.C.P.</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              FABRICACI&Oacute;N DE PRENDAS DE VESTIR, EXCEPTO PRENDAS DE
              PIEL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">141001</td>
          <td>
            FABRICACI&Oacute;N DE PRENDAS DE VESTIR DE MATERIALES TEXTILES Y
            SIMILARES
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">141002</td>
          <td>
            FABRICACI&Oacute;N DE PRENDAS DE VESTIR DE CUERO NATURAL O
            ARTIFICIAL
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">141003</td>
          <td>FABRICACI&Oacute;N DE ACCESORIOS DE VESTIR</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">141004</td>
          <td>FABRICACI&Oacute;N DE ROPA DE TRABAJO</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              FABRICACI&Oacute;N DE ART&Iacute;CULOS DE
              PIEL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">142000</td>
          <td>FABRICACI&Oacute;N DE ART&Iacute;CULOS DE PIEL</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              FABRICACI&Oacute;N DE ART&Iacute;CULOS DE PUNTO Y
              GANCHILLO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">143000</td>
          <td>FABRICACI&Oacute;N DE ART&Iacute;CULOS DE PUNTO Y GANCHILLO</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              CURTIDO Y ADOBO DE CUEROS; FABRICACI&Oacute;N PRODUCTOS DE CUERO;
              ADOBO Y TE&Ntilde;IDO DE PIELES
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">151100</td>
          <td>CURTIDO Y ADOBO DE CUEROS; ADOBO Y TE&Ntilde;IDO DE PIELES</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">151200</td>
          <td>
            FABRICACI&Oacute;N DE MALETAS, BOLSOS Y ART&Iacute;CULOS SIMILARES,
            ART&Iacute;CULOS DE TALABARTER&Iacute;A Y GUARNICIONER&Iacute;A
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              FABRICACI&Oacute;N DE
              CALZADO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">152000</td>
          <td>FABRICACI&Oacute;N DE CALZADO</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              ASERRADO Y ACEPILLADURA DE
              MADERA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">161000</td>
          <td>ASERRADO Y ACEPILLADURA DE MADERA</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              FABRICACI&Oacute;N DE PRODUCTOS DE MADERA, CORCHO, PAJA Y
              MATERIALES
              TRENZABLES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">162100</td>
          <td>
            FABRICACI&Oacute;N DE HOJAS DE MADERA PARA ENCHAPADO Y TABLEROS A
            BASE DE MADERA
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">162200</td>
          <td>
            FABRICACI&Oacute;N DE PARTES Y PIEZAS DE CARPINTER&Iacute;A PARA
            EDIFICIOS Y CONSTRUCCIONES
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">162300</td>
          <td>FABRICACI&Oacute;N DE RECIPIENTES DE MADERA</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">162900</td>
          <td>
            FABRICACI&Oacute;N DE OTROS PRODUCTOS DE MADERA, DE ART&Iacute;CULOS
            DE CORCHO, PAJA Y MATERIALES TRENZABLES
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              FABRICACI&Oacute;N DE PAPEL Y DE PRODUCTOS DE
              PAPEL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">170110</td>
          <td>FABRICACI&Oacute;N DE CELULOSA Y OTRAS PASTAS DE MADERA</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">170190</td>
          <td>
            FABRICACI&Oacute;N DE PAPEL Y CART&Oacute;N PARA SU POSTERIOR USO
            INDUSTRIAL N.C.P.
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">170200</td>
          <td>
            FABRICACI&Oacute;N DE PAPEL Y CART&Oacute;N ONDULADO Y DE ENVASES DE
            PAPEL Y CART&Oacute;N
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">170900</td>
          <td>
            FABRICACI&Oacute;N DE OTROS ART&Iacute;CULOS DE PAPEL Y
            CART&Oacute;N
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              IMPRESI&Oacute;N Y ACTIVIDADES DE SERVICIOS RELACIONADAS CON LA
              IMPRESI&Oacute;N&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">181101</td>
          <td>IMPRESI&Oacute;N DE LIBROS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">181109</td>
          <td>OTRAS ACTIVIDADES DE IMPRESI&Oacute;N N.C.P.</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">181200</td>
          <td>ACTIVIDADES DE SERVICIOS RELACIONADAS CON LA IMPRESI&Oacute;N</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              REPRODUCCI&Oacute;N DE
              GRABACIONES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">182000</td>
          <td>REPRODUCCI&Oacute;N DE GRABACIONES</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              FABRICACI&Oacute;N DE PRODUCTOS DE HORNOS DE
              COQUE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">191000</td>
          <td>FABRICACI&Oacute;N DE PRODUCTOS DE HORNOS DE COQUE</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              FABRICACI&Oacute;N DE PRODUCTOS DE LA REFINACI&Oacute;N DEL
              PETR&Oacute;LEO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">192000</td>
          <td>
            FABRICACI&Oacute;N DE PRODUCTOS DE LA REFINACI&Oacute;N DEL
            PETR&Oacute;LEO
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              FABRICACI&Oacute;N SUSTANCIAS QU&Iacute;MICAS B&Aacute;SICAS,
              ABONOS Y COMPUESTOS DE NITR&Oacute;GENO, PL&Aacute;STICOS Y CAUCHO
              SINT.
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">201101</td>
          <td>
            FABRICACI&Oacute;N DE CARB&Oacute;N VEGETAL (EXCEPTO ACTIVADO);
            FABRICACI&Oacute;N DE BRIQUETAS DE CARB&Oacute;N VEGETAL
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">201109</td>
          <td>
            FABRICACI&Oacute;N DE OTRAS SUSTANCIAS QU&Iacute;MICAS
            B&Aacute;SICAS N.C.P.
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">201200</td>
          <td>FABRICACI&Oacute;N DE ABONOS Y COMPUESTOS DE NITR&Oacute;GENO</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">201300</td>
          <td>
            FABRICACI&Oacute;N DE PL&Aacute;STICOS Y CAUCHO SINT&Eacute;TICO EN
            FORMAS PRIMARIAS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              FABRICACI&Oacute;N DE OTROS PRODUCTOS
              QU&Iacute;MICOS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">202100</td>
          <td>
            FABRICACI&Oacute;N DE PLAGUICIDAS Y OTROS PRODUCTOS QU&Iacute;MICOS
            DE USO AGROPECUARIO
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">202200</td>
          <td>
            FABRICACI&Oacute;N DE PINTURAS, BARNICES Y PRODUCTOS DE
            REVESTIMIENTO, TINTAS DE IMPRENTA Y MASILLAS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">202300</td>
          <td>
            FABRICACI&Oacute;N DE JABONES Y DETERGENTES, PREPARADOS PARA
            LIMPIAR, PERFUMES Y PREPARADOS DE TOCADOR
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">202901</td>
          <td>
            FABRICACI&Oacute;N DE EXPLOSIVOS Y PRODUCTOS PIROT&Eacute;CNICOS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">202909</td>
          <td>FABRICACI&Oacute;N DE OTROS PRODUCTOS QU&Iacute;MICOS N.C.P.</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              FABRICACI&Oacute;N DE FIBRAS
              ARTIFICIALES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">203000</td>
          <td>FABRICACI&Oacute;N DE FIBRAS ARTIFICIALES</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              FABRICACI&Oacute;N DE PRODUCTOS FARMAC&Eacute;UTICOS, SUSTANCIAS
              QU&Iacute;MICAS MEDICINALES Y PRODUCTOS BOT&Aacute;NICOS
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">210000</td>
          <td>
            FABRICACI&Oacute;N DE PRODUCTOS FARMAC&Eacute;UTICOS, SUSTANCIAS
            QU&Iacute;MICAS MEDICINALES Y PRODUCTOS BOT&Aacute;NICOS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              FABRICACI&Oacute;N DE PRODUCTOS DE
              CAUCHO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">221100</td>
          <td>
            FABRICACI&Oacute;N DE CUBIERTAS Y C&Aacute;MARAS DE CAUCHO;
            RECAUCHUTADO Y RENOVACI&Oacute;N DE CUBIERTAS DE CAUCHO
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">221900</td>
          <td>FABRICACI&Oacute;N DE OTROS PRODUCTOS DE CAUCHO</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              FABRICACI&Oacute;N DE PRODUCTOS DE
              PL&Aacute;STICO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">222000</td>
          <td>FABRICACI&Oacute;N DE PRODUCTOS DE PL&Aacute;STICO</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              FABRICACI&Oacute;N DE VIDRIO Y PRODUCTOS DE
              VIDRIO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">231001</td>
          <td>FABRICACI&Oacute;N DE VIDRIO PLANO</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">231002</td>
          <td>FABRICACI&Oacute;N DE VIDRIO HUECO</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">231003</td>
          <td>FABRICACI&Oacute;N DE FIBRAS DE VIDRIO</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">231009</td>
          <td>FABRICACI&Oacute;N DE PRODUCTOS DE VIDRIO N.C.P.</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              FABRICACI&Oacute;N DE PRODUCTOS MINERALES NO MET&Aacute;LICOS
              N.C.P.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">239100</td>
          <td>FABRICACI&Oacute;N DE PRODUCTOS REFRACTARIOS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">239200</td>
          <td>
            FABRICACI&Oacute;N DE MATERIALES DE CONSTRUCCI&Oacute;N DE ARCILLA
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">239300</td>
          <td>
            FABRICACI&Oacute;N DE OTROS PRODUCTOS DE PORCELANA Y DE
            CER&Aacute;MICA
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">239400</td>
          <td>FABRICACI&Oacute;N DE CEMENTO, CAL Y YESO</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">239500</td>
          <td>
            FABRICACI&Oacute;N DE ART&Iacute;CULOS DE HORMIG&Oacute;N, CEMENTO Y
            YESO
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">239600</td>
          <td>CORTE, TALLA Y ACABADO DE LA PIEDRA</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">239900</td>
          <td>
            FABRICACI&Oacute;N DE OTROS PRODUCTOS MINERALES NO MET&Aacute;LICOS
            N.C.P.
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              INDUSTRIAS B&Aacute;SICAS DE HIERRO Y
              ACERO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">241000</td>
          <td>INDUSTRIAS B&Aacute;SICAS DE HIERRO Y ACERO</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              FABRICACI&Oacute;N DE PRODUCTOS PRIMARIOS DE METALES PRECIOSOS Y
              OTROS METALES NO
              FERROSOS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">242001</td>
          <td>FABRICACI&Oacute;N DE PRODUCTOS PRIMARIOS DE COBRE</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">242002</td>
          <td>FABRICACI&Oacute;N DE PRODUCTOS PRIMARIOS DE ALUMINIO</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">242009</td>
          <td>
            FABRICACI&Oacute;N DE PRODUCTOS PRIMARIOS DE METALES PRECIOSOS Y DE
            OTROS METALES NO FERROSOS N.C.P.
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              FUNDICI&Oacute;N DE
              METALES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">243100</td>
          <td>FUNDICI&Oacute;N DE HIERRO Y ACERO</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">243200</td>
          <td>FUNDICI&Oacute;N DE METALES NO FERROSOS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              FABRICACI&Oacute;N DE PRODUCTOS MET&Aacute;LICOS PARA USO
              ESTRUCTURAL, TANQUES, DEP&Oacute;SITOS, RECIPIENTES DE METAL
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">251100</td>
          <td>
            FABRICACI&Oacute;N DE PRODUCTOS MET&Aacute;LICOS PARA USO
            ESTRUCTURAL
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">251201</td>
          <td>
            FABRICACI&Oacute;N DE RECIPIENTES DE METAL PARA GASES COMPRIMIDOS O
            LICUADOS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">251209</td>
          <td>
            FABRICACI&Oacute;N DE TANQUES, DEP&Oacute;SITOS Y RECIPIENTES DE
            METAL N.C.P.
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">251300</td>
          <td>
            FABRICACI&Oacute;N DE GENERADORES DE VAPOR, EXCEPTO CALDERAS DE AGUA
            CALIENTE PARA CALEFACCI&Oacute;N CENTRAL
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              FABRICACI&Oacute;N DE ARMAS Y
              MUNICIONES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">252000</td>
          <td>FABRICACI&Oacute;N DE ARMAS Y MUNICIONES</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              FABRICACI&Oacute;N DE OTROS PRODUCTOS ELABORADOS DE METAL;
              ACTIVIDADES DE SERVICIOS DE TRABAJO DE METALES
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">259100</td>
          <td>
            FORJA, PRENSADO, ESTAMPADO Y LAMINADO DE METALES; PULVIMETALURGIA
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">259200</td>
          <td>TRATAMIENTO Y REVESTIMIENTO DE METALES; MAQUINADO</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">259300</td>
          <td>
            FABRICACI&Oacute;N DE ART&Iacute;CULOS DE CUCHILLER&Iacute;A,
            HERRAMIENTAS DE MANO Y ART&Iacute;CULOS DE FERRETER&Iacute;A
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">259900</td>
          <td>
            FABRICACI&Oacute;N DE OTROS PRODUCTOS ELABORADOS DE METAL N.C.P.
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              FABRICACI&Oacute;N DE COMPONENTES Y TABLEROS
              ELECTR&Oacute;NICOS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">261000</td>
          <td>
            FABRICACI&Oacute;N DE COMPONENTES Y TABLEROS ELECTR&Oacute;NICOS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              FABRICACI&Oacute;N DE COMPUTADORES Y EQUIPO
              PERIF&Eacute;RICO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">262000</td>
          <td>FABRICACI&Oacute;N DE COMPUTADORES Y EQUIPO PERIF&Eacute;RICO</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              FABRICACI&Oacute;N DE EQUIPO DE
              COMUNICACIONES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">263000</td>
          <td>FABRICACI&Oacute;N DE EQUIPO DE COMUNICACIONES</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              FABRICACI&Oacute;N DE APARATOS ELECTR&Oacute;NICOS DE
              CONSUMO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">264000</td>
          <td>FABRICACI&Oacute;N DE APARATOS ELECTR&Oacute;NICOS DE CONSUMO</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              FABRICACI&Oacute;N DE EQUIPO DE MEDICI&Oacute;N, PRUEBA,
              NAVEGACI&Oacute;N Y CONTROL Y DE
              RELOJES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">265100</td>
          <td>
            FABRICACI&Oacute;N DE EQUIPO DE MEDICI&Oacute;N, PRUEBA,
            NAVEGACI&Oacute;N Y CONTROL
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">265200</td>
          <td>FABRICACI&Oacute;N DE RELOJES</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              FABRICACI&Oacute;N DE EQUIPO DE IRRADIACI&Oacute;N Y EQUIPO
              ELECTR&Oacute;NICO DE USO M&Eacute;DICO Y
              TERAP&Eacute;UTICO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">266000</td>
          <td>
            FABRICACI&Oacute;N DE EQUIPO DE IRRADIACI&Oacute;N Y EQUIPO
            ELECTR&Oacute;NICO DE USO M&Eacute;DICO Y TERAP&Eacute;UTICO
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              FABRICACI&Oacute;N DE INSTRUMENTOS &Oacute;PTICOS Y EQUIPO
              FOTOGR&Aacute;FICO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">267000</td>
          <td>
            FABRICACI&Oacute;N DE INSTRUMENTOS &Oacute;PTICOS Y EQUIPO
            FOTOGR&Aacute;FICO
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              FABRICACI&Oacute;N DE SOPORTES MAGN&Eacute;TICOS Y
              &Oacute;PTICOS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">268000</td>
          <td>
            FABRICACI&Oacute;N DE SOPORTES MAGN&Eacute;TICOS Y &Oacute;PTICOS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              FABRICACI&Oacute;N DE MOTORES, GENERADORES Y TRANSFORMADORES
              EL&Eacute;CTRICOS, APARATOS DE DISTRIBUCI&Oacute;N Y CONTROL
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">271000</td>
          <td>
            FABRICACI&Oacute;N DE MOTORES, GENERADORES Y TRANSFORMADORES
            EL&Eacute;CTRICOS, APARATOS DE DISTRIBUCI&Oacute;N Y CONTROL
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              FABRICACI&Oacute;N DE PILAS, BATER&Iacute;AS Y
              ACUMULADORES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">272000</td>
          <td>FABRICACI&Oacute;N DE PILAS, BATER&Iacute;AS Y ACUMULADORES</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              FABRICACI&Oacute;N DE CABLES Y DISPOSITIVOS DE
              CABLEADO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">273100</td>
          <td>FABRICACI&Oacute;N DE CABLES DE FIBRA &Oacute;PTICA</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">273200</td>
          <td>FABRICACI&Oacute;N DE OTROS HILOS Y CABLES EL&Eacute;CTRICOS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">273300</td>
          <td>FABRICACI&Oacute;N DE DISPOSITIVOS DE CABLEADO</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              FABRICACI&Oacute;N DE EQUIPO EL&Eacute;CTRICO DE
              ILUMINACI&Oacute;N&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">274000</td>
          <td>
            FABRICACI&Oacute;N DE EQUIPO EL&Eacute;CTRICO DE ILUMINACI&Oacute;N
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              FABRICACI&Oacute;N DE APARATOS DE USO
              DOM&Eacute;STICO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">275000</td>
          <td>FABRICACI&Oacute;N DE APARATOS DE USO DOM&Eacute;STICO</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              FABRICACI&Oacute;N DE OTROS TIPOS DE EQUIPO
              EL&Eacute;CTRICO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">279000</td>
          <td>FABRICACI&Oacute;N DE OTROS TIPOS DE EQUIPO EL&Eacute;CTRICO</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              FABRICACI&Oacute;N DE MAQUINARIA DE USO
              GENERAL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">281100</td>
          <td>
            FABRICACI&Oacute;N DE MOTORES Y TURBINAS, EXCEPTO PARA AERONAVES,
            VEH&Iacute;CULOS AUTOMOTORES Y MOTOCICLETAS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">281200</td>
          <td>FABRICACI&Oacute;N DE EQUIPO DE PROPULSI&Oacute;N DE FLUIDOS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">281300</td>
          <td>
            FABRICACI&Oacute;N DE OTRAS BOMBAS, COMPRESORES, GRIFOS Y
            V&Aacute;LVULAS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">281400</td>
          <td>
            FABRICACI&Oacute;N DE COJINETES, ENGRANAJES, TRENES DE ENGRANAJES Y
            PIEZAS DE TRANSMISI&Oacute;N
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">281500</td>
          <td>FABRICACI&Oacute;N DE HORNOS, CALDERAS Y QUEMADORES</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">281600</td>
          <td>
            FABRICACI&Oacute;N DE EQUIPO DE ELEVACI&Oacute;N Y
            MANIPULACI&Oacute;N
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">281700</td>
          <td>
            FABRICACI&Oacute;N DE MAQUINARIA Y EQUIPO DE OFICINA (EXCEPTO
            COMPUTADORES Y EQUIPO PERIF&Eacute;RICO)
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">281800</td>
          <td>FABRICACI&Oacute;N DE HERRAMIENTAS DE MANO MOTORIZADAS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">281900</td>
          <td>
            FABRICACI&Oacute;N DE OTROS TIPOS DE MAQUINARIA DE USO GENERAL
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              FABRICACI&Oacute;N DE MAQUINARIA DE USO
              ESPECIAL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">282100</td>
          <td>FABRICACI&Oacute;N DE MAQUINARIA AGROPECUARIA Y FORESTAL</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">282200</td>
          <td>
            FABRICACI&Oacute;N DE MAQUINARIA PARA LA CONFORMACI&Oacute;N DE
            METALES Y DE M&Aacute;QUINAS HERRAMIENTA
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">282300</td>
          <td>FABRICACI&Oacute;N DE MAQUINARIA METAL&Uacute;RGICA</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">282400</td>
          <td>
            FABRICACI&Oacute;N DE MAQUINARIA PARA LA EXPLOTACI&Oacute;N DE MINAS
            Y CANTERAS Y PARA OBRAS DE CONSTRUCCI&Oacute;N
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">282500</td>
          <td>
            FABRICACI&Oacute;N DE MAQUINARIA PARA LA ELABORACI&Oacute;N DE
            ALIMENTOS, BEBIDAS Y TABACO
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">282600</td>
          <td>
            FABRICACI&Oacute;N DE MAQUINARIA PARA LA ELABORACI&Oacute;N DE
            PRODUCTOS TEXTILES, PRENDAS DE VESTIR Y CUEROS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">282900</td>
          <td>
            FABRICACI&Oacute;N DE OTROS TIPOS DE MAQUINARIA DE USO ESPECIAL
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              FABRICACI&Oacute;N DE VEH&Iacute;CULOS
              AUTOMOTORES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">291000</td>
          <td>FABRICACI&Oacute;N DE VEH&Iacute;CULOS AUTOMOTORES</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              FABRICACI&Oacute;N DE CARROCER&Iacute;AS PARA VEH&Iacute;CULOS
              AUTOMOTORES; FABRICACI&Oacute;N DE REMOLQUES Y SEMIRREMOLQUES
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">292000</td>
          <td>
            FABRICACI&Oacute;N DE CARROCER&Iacute;AS PARA VEH&Iacute;CULOS
            AUTOMOTORES; FABRICACI&Oacute;N DE REMOLQUES Y SEMIRREMOLQUES
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              FABRICACI&Oacute;N DE PARTES, PIEZAS Y ACCESORIOS PARA
              VEH&Iacute;CULOS
              AUTOMOTORES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">293000</td>
          <td>
            FABRICACI&Oacute;N DE PARTES, PIEZAS Y ACCESORIOS PARA
            VEH&Iacute;CULOS AUTOMOTORES
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              CONSTRUCCI&Oacute;N DE BUQUES Y OTRAS
              EMBARCACIONES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">301100</td>
          <td>
            CONSTRUCCI&Oacute;N DE BUQUES, EMBARCACIONES MENORES Y ESTRUCTURAS
            FLOTANTES
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">301200</td>
          <td>CONSTRUCCI&Oacute;N DE EMBARCACIONES DE RECREO Y DE DEPORTE</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              FABRICACI&Oacute;N DE LOCOMOTORAS Y MATERIAL
              RODANTE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">302000</td>
          <td>FABRICACI&Oacute;N DE LOCOMOTORAS Y MATERIAL RODANTE</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              FABRICACI&Oacute;N DE AERONAVES, NAVES ESPACIALES Y MAQUINARIA
              CONEXA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">303000</td>
          <td>
            FABRICACI&Oacute;N DE AERONAVES, NAVES ESPACIALES Y MAQUINARIA
            CONEXA
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              FABRICACI&Oacute;N DE VEH&Iacute;CULOS MILITARES DE
              COMBATE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">304000</td>
          <td>FABRICACI&Oacute;N DE VEH&Iacute;CULOS MILITARES DE COMBATE</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              FABRICACI&Oacute;N DE EQUIPO DE TRANSPORTE
              N.C.P.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">309100</td>
          <td>FABRICACI&Oacute;N DE MOTOCICLETAS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">309200</td>
          <td>FABRICACI&Oacute;N DE BICICLETAS Y DE SILLAS DE RUEDAS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">309900</td>
          <td>
            FABRICACI&Oacute;N DE OTROS TIPOS DE EQUIPO DE TRANSPORTE N.C.P.
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              FABRICACI&Oacute;N DE
              MUEBLES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">310001</td>
          <td>FABRICACI&Oacute;N DE MUEBLES PRINCIPALMENTE DE MADERA</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">310009</td>
          <td>
            FABRICACI&Oacute;N DE COLCHONES; FABRICACI&Oacute;N DE OTROS MUEBLES
            N.C.P.
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              FABRICACI&Oacute;N DE JOYAS, BISUTER&Iacute;A Y ART&Iacute;CULOS
              CONEXOS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">321100</td>
          <td>FABRICACI&Oacute;N DE JOYAS Y ART&Iacute;CULOS CONEXOS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">321200</td>
          <td>
            FABRICACI&Oacute;N DE BISUTER&Iacute;A Y ART&Iacute;CULOS CONEXOS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              FABRICACI&Oacute;N DE INSTRUMENTOS
              MUSICALES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">322000</td>
          <td>FABRICACI&Oacute;N DE INSTRUMENTOS MUSICALES</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              FABRICACI&Oacute;N DE ART&Iacute;CULOS DE
              DEPORTE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">323000</td>
          <td>FABRICACI&Oacute;N DE ART&Iacute;CULOS DE DEPORTE</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              FABRICACI&Oacute;N DE JUEGOS Y
              JUGUETES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">324000</td>
          <td>FABRICACI&Oacute;N DE JUEGOS Y JUGUETES</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              FABRICACI&Oacute;N DE INSTRUMENTOS Y MATERIALES M&Eacute;DICOS Y
              ODONTOL&Oacute;GICOS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">325001</td>
          <td>ACTIVIDADES DE LABORATORIOS DENTALES</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">325009</td>
          <td>
            FABRICACI&Oacute;N DE INSTRUMENTOS Y MATERIALES M&Eacute;DICOS,
            OFTALMOL&Oacute;GICOS Y ODONTOL&Oacute;GICOS N.C.P.
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              OTRAS INDUSTRIAS MANUFACTURERAS
              N.C.P.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">329000</td>
          <td>OTRAS INDUSTRIAS MANUFACTURERAS N.C.P.</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              REPARACI&Oacute;N DE PRODUCTOS ELABORADOS DE METAL, MAQUINARIA Y
              EQUIPO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">331100</td>
          <td>REPARACI&Oacute;N DE PRODUCTOS ELABORADOS DE METAL</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">331201</td>
          <td>REPARACI&Oacute;N DE MAQUINARIA AGROPECUARIA Y FORESTAL</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">331202</td>
          <td>
            REPARACI&Oacute;N DE MAQUINARIA METAL&Uacute;RGICA, PARA LA
            MINER&Iacute;A, EXTRACCI&Oacute;N DE PETR&Oacute;LEO Y PARA LA
            CONSTRUCCI&Oacute;N
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">331203</td>
          <td>
            REPARACI&Oacute;N DE MAQUINARIA PARA LA ELABORACI&Oacute;N DE
            ALIMENTOS, BEBIDAS Y TABACO
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">331204</td>
          <td>
            REPARACI&Oacute;N DE MAQUINARIA PARA PRODUCIR TEXTILES, PRENDAS DE
            VESTIR, ART&Iacute;CULOS DE CUERO Y CALZADO&nbsp;&nbsp;
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">331209</td>
          <td>
            REPARACI&Oacute;N DE OTRO TIPO DE MAQUINARIA Y EQUIPOS INDUSTRIALES
            N.C.P.
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">331301</td>
          <td>
            REPARACI&Oacute;N DE EQUIPO DE MEDICI&Oacute;N, PRUEBA,
            NAVEGACI&Oacute;N Y CONTROL
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">331309</td>
          <td>
            REPARACI&Oacute;N DE OTROS EQUIPOS ELECTR&Oacute;NICOS Y
            &Oacute;PTICOS N.C.P.
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">331400</td>
          <td>
            REPARACI&Oacute;N DE EQUIPO EL&Eacute;CTRICO (EXCEPTO
            REPARACI&Oacute;N DE EQUIPO Y ENSERES DOM&Eacute;STICOS)
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">331501</td>
          <td>
            REPARACI&Oacute;N DE BUQUES, EMBARCACIONES MENORES Y ESTRUCTURAS
            FLOTANTES
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">331502</td>
          <td>REPARACI&Oacute;N DE AERONAVES Y NAVES ESPACIALES</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">331509</td>
          <td>
            REPARACI&Oacute;N DE OTROS EQUIPOS DE TRANSPORTE N.C.P., EXCEPTO
            VEH&Iacute;CULOS AUTOMOTORES
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">331900</td>
          <td>REPARACI&Oacute;N DE OTROS TIPOS DE EQUIPO</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              INSTALACI&Oacute;N DE MAQUINARIA Y EQUIPOS
              INDUSTRIALES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">332000</td>
          <td>INSTALACI&Oacute;N DE MAQUINARIA Y EQUIPOS INDUSTRIALES</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>

        <tr height="20">
          <th colspan="5">
            <a name="4">
              <font color="#000000">
                SUMINISTRO DE ELECTRICIDAD, GAS, VAPOR Y AIRE ACONDICIONADO
              </font>
            </a>
          </th>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              GENERACI&Oacute;N, TRANSMISI&Oacute;N Y DISTRIBUCI&Oacute;N DE
              ENERG&Iacute;A
              EL&Eacute;CTRICA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">351011</td>
          <td>
            GENERACI&Oacute;N DE ENERG&Iacute;A EL&Eacute;CTRICA EN CENTRALES
            HIDROEL&Eacute;CTRICAS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">351012</td>
          <td>
            GENERACI&Oacute;N DE ENERG&Iacute;A EL&Eacute;CTRICA EN CENTRALES
            TERMOEL&Eacute;CTRICAS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">351019</td>
          <td>
            GENERACI&Oacute;N DE ENERG&Iacute;A EL&Eacute;CTRICA EN OTRAS
            CENTRALES N.C.P.
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">351020</td>
          <td>TRANSMISI&Oacute;N DE ENERG&Iacute;A EL&Eacute;CTRICA</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">351030</td>
          <td>DISTRIBUCI&Oacute;N DE ENERG&Iacute;A EL&Eacute;CTRICA</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              FABRICACI&Oacute;N DE GAS; DISTRIBUCI&Oacute;N DE COMBUSTIBLES
              GASEOSOS POR
              TUBER&Iacute;AS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">352010</td>
          <td>REGASIFICACI&Oacute;N DE GAS NATURAL LICUADO (GNL)</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">352020</td>
          <td>
            FABRICACI&Oacute;N DE GAS; DISTRIBUCI&Oacute;N DE COMBUSTIBLES
            GASEOSOS POR TUBER&Iacute;A, EXCEPTO REGASIFICACI&Oacute;N DE GNL
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              SUMINISTRO DE VAPOR Y DE AIRE
              ACONDICIONADO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">353001</td>
          <td>SUMINISTRO DE VAPOR Y DE AIRE ACONDICIONADO</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">353002</td>
          <td>
            ELABORACI&Oacute;N DE HIELO (EXCEPTO FABRICACI&Oacute;N DE HIELO
            SECO)
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <th colspan="5">
            <a name="5">
              <font color="#000000">
                SUMINISTRO DE AGUA; EVACUACI&Oacute;N DE AGUAS RESIDUALES,
                GESTI&Oacute;N DE DESECHOS Y DESCONTAMINACI&Oacute;N
              </font>
            </a>
          </th>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              CAPTACI&Oacute;N, TRATAMIENTO Y DISTRIBUCI&Oacute;N DE
              AGUA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">360000</td>
          <td>CAPTACI&Oacute;N, TRATAMIENTO Y DISTRIBUCI&Oacute;N DE AGUA</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              EVACUACI&Oacute;N DE AGUAS
              RESIDUALES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">370000</td>
          <td>EVACUACI&Oacute;N Y TRATAMIENTO DE AGUAS SERVIDAS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              RECOGIDA DE
              DESECHOS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">381100</td>
          <td>RECOGIDA DE DESECHOS NO PELIGROSOS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">381200</td>
          <td>RECOGIDA DE DESECHOS PELIGROSOS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              TRATAMIENTO Y ELIMINACI&Oacute;N DE
              DESECHOS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">382100</td>
          <td>TRATAMIENTO Y ELIMINACI&Oacute;N DE DESECHOS NO PELIGROSOS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">382200</td>
          <td>TRATAMIENTO Y ELIMINACI&Oacute;N DE DESECHOS PELIGROSOS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              RECUPERACI&Oacute;N DE
              MATERIALES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">383001</td>
          <td>
            RECUPERACI&Oacute;N Y RECICLAMIENTO DE DESPERDICIOS Y DESECHOS
            MET&Aacute;LICOS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">383002</td>
          <td>RECUPERACI&Oacute;N Y RECICLAMIENTO DE PAPEL</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">383003</td>
          <td>RECUPERACI&Oacute;N Y RECICLAMIENTO DE VIDRIO</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">383009</td>
          <td>
            RECUPERACI&Oacute;N Y RECICLAMIENTO DE OTROS DESPERDICIOS Y DESECHOS
            N.C.P.
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              ACTIVIDADES DE DESCONTAMINACI&Oacute;N Y OTROS SERVICIOS DE
              GESTI&Oacute;N DE
              DESECHOS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">390000</td>
          <td>
            ACTIVIDADES DE DESCONTAMINACI&Oacute;N Y OTROS SERVICIOS DE
            GESTI&Oacute;N DE DESECHOS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <th colspan="5">
            <a name="6">
              <font color="#000000">CONSTRUCCI&Oacute;N</font>
            </a>
          </th>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            CONSTRUCCI&Oacute;N DE
            EDIFICIOS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">410010</td>
          <td>CONSTRUCCI&Oacute;N DE EDIFICIOS PARA USO RESIDENCIAL</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">410020</td>
          <td>CONSTRUCCI&Oacute;N DE EDIFICIOS PARA USO NO RESIDENCIAL</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            CONSTRUCCI&Oacute;N DE CARRETERAS Y L&Iacute;NEAS DE
            FERROCARRIL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">421000</td>
          <td>
            CONSTRUCCI&Oacute;N DE CARRETERAS Y L&Iacute;NEAS DE FERROCARRIL
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            CONSTRUCCI&Oacute;N DE PROYECTOS DE SERVICIO
            P&Uacute;BLICO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">422000</td>
          <td>CONSTRUCCI&Oacute;N DE PROYECTOS DE SERVICIO P&Uacute;BLICO</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            CONSTRUCCI&Oacute;N DE OTRAS OBRAS DE INGENIER&Iacute;A
            CIVIL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">429000</td>
          <td>CONSTRUCCI&Oacute;N DE OTRAS OBRAS DE INGENIER&Iacute;A CIVIL</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            DEMOLICI&Oacute;N Y PREPARACI&Oacute;N DEL
            TERRENO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">431100</td>
          <td>DEMOLICI&Oacute;N</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">431200</td>
          <td>PREPARACI&Oacute;N DEL TERRENO</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            INSTALACIONES EL&Eacute;CTRICAS, DE GASFITER&Iacute;A Y OTRAS
            INSTALACIONES PARA OBRAS DE CONSTRUCCI&Oacute;N&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">432100</td>
          <td>INSTALACIONES EL&Eacute;CTRICAS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">432200</td>
          <td>
            INSTALACIONES DE GASFITER&Iacute;A, CALEFACCI&Oacute;N Y AIRE
            ACONDICIONADO
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">432900</td>
          <td>OTRAS INSTALACIONES PARA OBRAS DE CONSTRUCCI&Oacute;N</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            TERMINACI&Oacute;N Y ACABADO DE
            EDIFICIOS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">433000</td>
          <td>TERMINACI&Oacute;N Y ACABADO DE EDIFICIOS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            OTRAS ACTIVIDADES ESPECIALIZADAS DE
            CONSTRUCCI&Oacute;N&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">439000</td>
          <td>OTRAS ACTIVIDADES ESPECIALIZADAS DE CONSTRUCCI&Oacute;N</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <th colspan="5">
            <a name="7">
              <font color="#000000">
                COMERCIO AL POR MAYOR Y AL POR MENOR; REPARACI&Oacute;N DE
                VEHICULOS AUTOMOTORES Y MOTOCICLETAS
              </font>
            </a>
          </th>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            VENTA DE VEH&Iacute;CULOS
            AUTOMOTORES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">451001</td>
          <td>VENTA AL POR MAYOR DE VEH&Iacute;CULOS AUTOMOTORES</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">451002</td>
          <td>
            VENTA AL POR MENOR DE VEH&Iacute;CULOS AUTOMOTORES NUEVOS O USADOS
            (INCLUYE COMPRAVENTA)
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            MANTENIMIENTO Y REPARACI&Oacute;N DE VEH&Iacute;CULOS
            AUTOMOTORES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">452001</td>
          <td>SERVICIO DE LAVADO DE VEH&Iacute;CULOS AUTOMOTORES</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">452002</td>
          <td>
            MANTENIMIENTO Y REPARACI&Oacute;N DE VEH&Iacute;CULOS AUTOMOTORES
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            VENTA DE PARTES, PIEZAS Y ACCESORIOS PARA VEH&Iacute;CULOS
            AUTOMOTORES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">453000</td>
          <td>
            VENTA DE PARTES, PIEZAS Y ACCESORIOS PARA VEH&Iacute;CULOS
            AUTOMOTORES
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            VENTA, MANTENIMIENTO Y REPARACI&Oacute;N DE MOTOCICLETAS Y SUS
            PARTES, PIEZAS Y
            ACCESORIOS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">454001</td>
          <td>VENTA DE MOTOCICLETAS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">454002</td>
          <td>VENTA DE PARTES, PIEZAS Y ACCESORIOS DE MOTOCICLETAS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">454003</td>
          <td>MANTENIMIENTO Y REPARACI&Oacute;N DE MOTOCICLETAS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            VENTA AL POR MAYOR A CAMBIO DE UNA RETRIBUCI&Oacute;N O POR
            CONTRATA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">461001</td>
          <td>CORRETAJE AL POR MAYOR DE PRODUCTOS AGR&Iacute;COLAS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">461002</td>
          <td>CORRETAJE AL POR MAYOR DE GANADO</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">461009</td>
          <td>OTROS TIPOS DE CORRETAJES O REMATES AL POR MAYOR N.C.P.</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            VENTA AL POR MAYOR DE MATERIAS PRIMAS AGROPECUARIAS Y ANIMALES
            VIVOS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">462010</td>
          <td>VENTA AL POR MAYOR DE MATERIAS PRIMAS AGR&Iacute;COLAS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">462020</td>
          <td>VENTA AL POR MAYOR DE ANIMALES VIVOS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">462090</td>
          <td>
            VENTA AL POR MAYOR DE OTRAS MATERIAS PRIMAS AGROPECUARIAS N.C.P.
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            VENTA AL POR MAYOR DE ALIMENTOS, BEBIDAS Y
            TABACO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">463011</td>
          <td>VENTA AL POR MAYOR DE FRUTAS Y VERDURAS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">463012</td>
          <td>VENTA AL POR MAYOR DE CARNE Y PRODUCTOS C&Aacute;RNICOS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">463013</td>
          <td>
            VENTA AL POR MAYOR DE PRODUCTOS DEL MAR (PESCADOS, MARISCOS Y ALGAS)
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">463014</td>
          <td>VENTA AL POR MAYOR DE PRODUCTOS DE CONFITER&Iacute;A</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">463019</td>
          <td>
            VENTA AL POR MAYOR DE HUEVOS, L&Aacute;CTEOS, ABARROTES Y DE OTROS
            ALIMENTOS N.C.P.
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">463020</td>
          <td>
            VENTA AL POR MAYOR DE BEBIDAS ALCOH&Oacute;LICAS Y NO
            ALCOH&Oacute;LICAS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">463030</td>
          <td>VENTA AL POR MAYOR DE TABACO</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            VENTA AL POR MAYOR DE ENSERES
            DOM&Eacute;STICOS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">464100</td>
          <td>
            VENTA AL POR MAYOR DE PRODUCTOS TEXTILES, PRENDAS DE VESTIR Y
            CALZADO
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">464901</td>
          <td>VENTA AL POR MAYOR DE MUEBLES, EXCEPTO MUEBLES DE OFICINA</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">464902</td>
          <td>
            VENTA AL POR MAYOR DE ART&Iacute;CULOS EL&Eacute;CTRICOS Y
            ELECTR&Oacute;NICOS PARA EL HOGAR
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">464903</td>
          <td>
            VENTA AL POR MAYOR DE ART&Iacute;CULOS DE PERFUMER&Iacute;A, DE
            TOCADOR Y COSM&Eacute;TICOS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">464904</td>
          <td>
            VENTA AL POR MAYOR DE ART&Iacute;CULOS DE PAPELER&Iacute;A Y
            ESCRITORIO
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">464905</td>
          <td>VENTA AL POR MAYOR DE LIBROS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">464906</td>
          <td>VENTA AL POR MAYOR DE DIARIOS Y REVISTAS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">464907</td>
          <td>
            VENTA AL POR MAYOR DE PRODUCTOS FARMAC&Eacute;UTICOS Y
            MEDICINALES&nbsp;
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">464908</td>
          <td>
            VENTA AL POR MAYOR DE INSTRUMENTOS CIENT&Iacute;FICOS Y
            QUIR&Uacute;RGICOS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">464909</td>
          <td>VENTA AL POR MAYOR DE OTROS ENSERES DOM&Eacute;STICOS N.C.P.</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            VENTA AL POR MAYOR DE MAQUINARIA, EQUIPO Y
            MATERIALES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">465100</td>
          <td>
            VENTA AL POR MAYOR DE COMPUTADORES, EQUIPO PERIF&Eacute;RICO Y
            PROGRAMAS INFORM&Aacute;TICOS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">465200</td>
          <td>
            VENTA AL POR MAYOR DE EQUIPO, PARTES Y PIEZAS ELECTR&Oacute;NICOS Y
            DE TELECOMUNICACIONES
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">465300</td>
          <td>
            VENTA AL POR MAYOR DE MAQUINARIA, EQUIPO Y MATERIALES AGROPECUARIOS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">465901</td>
          <td>
            VENTA AL POR MAYOR DE MAQUINARIA METAL&Uacute;RGICA, PARA LA
            MINER&Iacute;A, EXTRACCI&Oacute;N DE PETR&Oacute;LEO Y
            CONSTRUCCI&Oacute;N
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">465902</td>
          <td>
            VENTA AL POR MAYOR DE MAQUINARIA PARA LA ELABORACI&Oacute;N DE
            ALIMENTOS, BEBIDAS Y TABACO
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">465903</td>
          <td>
            VENTA AL POR MAYOR DE MAQUINARIA PARA LA INDUSTRIA TEXTIL, DEL CUERO
            Y DEL CALZADO
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">465904</td>
          <td>
            VENTA AL POR MAYOR DE MAQUINARIA Y EQUIPO DE OFICINA; VENTA AL POR
            MAYOR DE MUEBLES DE OFICINA
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">465905</td>
          <td>
            VENTA AL POR MAYOR DE EQUIPO DE TRANSPORTE(EXCEPTO VEH&Iacute;CULOS
            AUTOMOTORES, MOTOCICLETAS Y BICICLETAS)
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">465909</td>
          <td>
            VENTA AL POR MAYOR DE OTROS TIPOS DE MAQUINARIA Y EQUIPO N.C.P.
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            OTRAS ACTIVIDADES DE VENTA AL POR MAYOR
            ESPECIALIZADA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">466100</td>
          <td>
            VENTA AL POR MAYOR DE COMBUSTIBLES S&Oacute;LIDOS, L&Iacute;QUIDOS Y
            GASEOSOS Y PRODUCTOS CONEXOS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">466200</td>
          <td>VENTA AL POR MAYOR DE METALES Y MINERALES METAL&Iacute;FEROS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">466301</td>
          <td>
            VENTA AL POR MAYOR DE MADERA EN BRUTO Y PRODUCTOS PRIMARIOS DE LA
            ELABORACI&Oacute;N DE MADERA
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">466302</td>
          <td>
            VENTA AL POR MAYOR DE MATERIALES DE CONSTRUCCI&Oacute;N,
            ART&Iacute;CULOS DE FERRETER&Iacute;A, GASFITER&Iacute;A Y
            CALEFACCI&Oacute;N
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">466901</td>
          <td>VENTA AL POR MAYOR DE PRODUCTOS QU&Iacute;MICOS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">466902</td>
          <td>VENTA AL POR MAYOR DE DESECHOS MET&Aacute;LICOS (CHATARRA)</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">466909</td>
          <td>
            VENTA AL POR MAYOR DE DESPERDICIOS, DESECHOS Y OTROS PRODUCTOS
            N.C.P.
          </td>
          <td>SI</td>
          <td>1</td>
          <td>NO</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            VENTA AL POR MAYOR NO
            ESPECIALIZADA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">469000</td>
          <td>VENTA AL POR MAYOR NO ESPECIALIZADA</td>
          <td>SI</td>
          <td>1</td>
          <td>NO</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            VENTA AL POR MENOR EN COMERCIOS NO
            ESPECIALIZADOS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">471100</td>
          <td>
            VENTA AL POR MENOR EN COMERCIOS DE ALIMENTOS, BEBIDAS O TABACO
            (SUPERMERCADOS E HIPERMERCADOS)
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">471910</td>
          <td>
            VENTA AL POR MENOR EN COMERCIOS DE VESTUARIO Y PRODUCTOS PARA EL
            HOGAR (GRANDES TIENDAS)
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">471990</td>
          <td>
            OTRAS ACTIVIDADES DE VENTA AL POR MENOR EN COMERCIOS NO
            ESPECIALIZADOS N.C.P.
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            VENTA AL POR MENOR DE ALIMENTOS, BEBIDAS Y TABACO EN COMERCIOS
            ESPECIALIZADOS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">472101</td>
          <td>
            VENTA AL POR MENOR DE ALIMENTOS EN COMERCIOS ESPECIALIZADOS
            (ALMACENES PEQUE&Ntilde;OS Y MINIMARKET)
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">472102</td>
          <td>
            VENTA AL POR MENOR EN COMERCIOS ESPECIALIZADOS DE CARNE Y PRODUCTOS
            C&Aacute;RNICOS&nbsp;
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">472103</td>
          <td>
            VENTA AL POR MENOR EN COMERCIOS ESPECIALIZADOS DE FRUTAS Y VERDURAS
            (VERDULER&Iacute;AS)
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">472104</td>
          <td>
            VENTA AL POR MENOR EN COMERCIOS ESPECIALIZADOS DE PESCADO, MARISCOS
            Y PRODUCTOS CONEXOS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">472105</td>
          <td>
            VENTA AL POR MENOR EN COMERCIOS ESPECIALIZADOS DE PRODUCTOS DE
            PANADER&Iacute;A Y PASTELER&Iacute;A
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">472109</td>
          <td>
            VENTA AL POR MENOR EN COMERCIOS ESPECIALIZADOS DE HUEVOS, CONFITES Y
            PRODUCTOS ALIMENTICIOS N.C.P.
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">472200</td>
          <td>
            VENTA AL POR MENOR DE BEBIDAS ALCOH&Oacute;LICAS Y NO
            ALCOH&Oacute;LICAS EN COMERCIOS ESPECIALIZADOS (BOTILLER&Iacute;AS)
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">472300</td>
          <td>
            VENTA AL POR MENOR DE TABACO Y PRODUCTOS DE TABACO EN COMERCIOS
            ESPECIALIZADOS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            VENTA AL POR MENOR DE COMBUSTIBLES PARA VEH&Iacute;CULOS AUTOMOTORES
            EN COMERCIOS
            ESPECIALIZADOS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">473000</td>
          <td>
            VENTA AL POR MENOR DE COMBUSTIBLES PARA VEH&Iacute;CULOS AUTOMOTORES
            EN COMERCIOS ESPECIALIZADOS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">474100</td>
          <td>
            VENTA AL POR MENOR DE COMPUTADORES, EQUIPO PERIF&Eacute;RICO,
            PROGRAMAS INFORM&Aacute;TICOS Y EQUIPO DE TELECOM.
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">474200</td>
          <td>
            VENTA AL POR MENOR DE EQUIPO DE SONIDO Y DE VIDEO EN COMERCIOS
            ESPECIALIZADOS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            VENTA AL POR MENOR DE OTROS ENSERES DOM&Eacute;STICOS EN COMERCIOS
            ESPECIALIZADOS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">475100</td>
          <td>
            VENTA AL POR MENOR DE TELAS, LANAS, HILOS Y SIMILARES EN COMERCIOS
            ESPECIALIZADOS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">475201</td>
          <td>
            VENTA AL POR MENOR DE ART&Iacute;CULOS DE FERRETER&Iacute;A Y
            MATERIALES DE CONSTRUCCI&Oacute;N&nbsp;
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">475202</td>
          <td>
            VENTA AL POR MENOR DE PINTURAS, BARNICES Y LACAS EN COMERCIOS
            ESPECIALIZADOS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">475203</td>
          <td>
            VENTA AL POR MENOR DE PRODUCTOS DE VIDRIO EN COMERCIOS
            ESPECIALIZADOS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">475300</td>
          <td>
            VENTA AL POR MENOR DE TAPICES, ALFOMBRAS Y CUBRIMIENTOS PARA PAREDES
            Y PISOS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">475901</td>
          <td>
            VENTA AL POR MENOR DE MUEBLES Y COLCHONES EN COMERCIOS
            ESPECIALIZADOS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">475902</td>
          <td>
            VENTA AL POR MENOR DE INSTRUMENTOS MUSICALES EN COMERCIOS
            ESPECIALIZADOS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">475909</td>
          <td>
            VENTA AL POR MENOR DE APARATOS EL&Eacute;CTRICOS, TEXTILES PARA EL
            HOGAR Y OTROS ENSERES DOM&Eacute;STICOS N.C.P.
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            VENTA AL POR MENOR DE PRODUCTOS CULTURALES Y RECREATIVOS EN
            COMERCIOS
            ESPECIALIZADOS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">476101</td>
          <td>VENTA AL POR MENOR DE LIBROS EN COMERCIOS ESPECIALIZADOS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">476102</td>
          <td>
            VENTA AL POR MENOR DE DIARIOS Y REVISTAS EN COMERCIOS ESPECIALIZADOS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">476103</td>
          <td>
            VENTA AL POR MENOR DE ART&Iacute;CULOS DE PAPELER&Iacute;A Y
            ESCRITORIO EN COMERCIOS ESPECIALIZADOS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">476200</td>
          <td>
            VENTA AL POR MENOR DE GRABACIONES DE M&Uacute;SICA Y DE VIDEO EN
            COMERCIOS ESPECIALIZADOS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">476301</td>
          <td>
            VENTA AL POR MENOR DE ART&Iacute;CULOS DE CAZA Y PESCA EN COMERCIOS
            ESPECIALIZADOS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">476302</td>
          <td>
            VENTA AL POR MENOR DE BICICLETAS Y SUS REPUESTOS EN COMERCIOS
            ESPECIALIZADOS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">476309</td>
          <td>
            VENTA AL POR MENOR DE OTROS ART&Iacute;CULOS Y EQUIPOS DE DEPORTE
            N.C.P.
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">476400</td>
          <td>
            VENTA AL POR MENOR DE JUEGOS Y JUGUETES EN COMERCIOS ESPECIALIZADOS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            VENTA AL POR MENOR DE OTROS PRODUCTOS EN COMERCIOS
            ESPECIALIZADOS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">477101</td>
          <td>VENTA AL POR MENOR DE CALZADO EN COMERCIOS ESPECIALIZADOS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">477102</td>
          <td>
            VENTA AL POR MENOR DE PRENDAS Y ACCESORIOS DE VESTIR EN COMERCIOS
            ESPECIALIZADOS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">477103</td>
          <td>
            VENTA AL POR MENOR DE CARTERAS, MALETAS Y OTROS ACCESORIOS DE VIAJE
            EN COMERCIOS ESPECIALIZADOS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">477201</td>
          <td>
            VENTA AL POR MENOR DE PRODUCTOS FARMAC&Eacute;UTICOS Y MEDICINALES
            EN COMERCIOS ESPECIALIZADOS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">477202</td>
          <td>
            VENTA AL POR MENOR DE ART&Iacute;CULOS ORTOP&Eacute;DICOS EN
            COMERCIOS ESPECIALIZADOS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">477203</td>
          <td>
            VENTA AL POR MENOR DE ART&Iacute;CULOS DE PERFUMER&Iacute;A, DE
            TOCADOR Y COSM&Eacute;TICOS EN COMERCIOS ESPECIALIZADOS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">477310</td>
          <td>
            VENTA AL POR MENOR DE GAS LICUADO EN BOMBONAS (CILINDROS) EN
            COMERCIOS ESPECIALIZADOS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">477391</td>
          <td>
            VENTA AL POR MENOR DE ALIMENTO Y ACCESORIOS PARA MASCOTAS EN
            COMERCIOS ESPECIALIZADOS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">477392</td>
          <td>
            VENTA AL POR MENOR DE ARMAS Y MUNICIONES EN COMERCIOS ESPECIALIZADOS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">477393</td>
          <td>
            VENTA AL POR MENOR DE ART&Iacute;CULOS &Oacute;PTICOS EN COMERCIOS
            ESPECIALIZADOS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">477394</td>
          <td>
            VENTA AL POR MENOR DE ART&Iacute;CULOS DE JOYER&Iacute;A,
            BISUTER&Iacute;A Y RELOJER&Iacute;A EN COMERCIOS ESPECIALIZADOS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">477395</td>
          <td>
            VENTA AL POR MENOR DE CARB&Oacute;N, LE&Ntilde;A Y OTROS
            COMBUSTIBLES DE USO DOM&Eacute;STICO EN COMERCIOS ESPECIALIZADOS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">477396</td>
          <td>
            VENTA AL POR MENOR DE RECUERDOS, ARTESAN&Iacute;AS Y
            ART&Iacute;CULOS RELIGIOSOS EN COMERCIOS ESPECIALIZADOS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">477397</td>
          <td>
            VENTA AL POR MENOR DE FLORES, PLANTAS, ARBOLES, SEMILLAS Y ABONOS EN
            COMERCIOS ESPECIALIZADOS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">477398</td>
          <td>VENTA AL POR MENOR DE MASCOTAS EN COMERCIOS ESPECIALIZADOS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">477399</td>
          <td>
            VENTA AL POR MENOR DE OTROS PRODUCTOS EN COMERCIOS ESPECIALIZADOS
            N.C.P.
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">477401</td>
          <td>VENTA AL POR MENOR DE ANTIG&Uuml;EDADES EN COMERCIOS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">477402</td>
          <td>VENTA AL POR MENOR DE ROPA USADA EN COMERCIOS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">477409</td>
          <td>
            VENTA AL POR MENOR DE OTROS ART&Iacute;CULOS DE SEGUNDA MANO EN
            COMERCIOS N.C.P.
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            VENTA AL POR MENOR EN PUESTOS DE VENTA Y
            MERCADOS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">478100</td>
          <td>
            VENTA AL POR MENOR DE ALIMENTOS, BEBIDAS Y TABACO EN PUESTOS DE
            VENTA Y MERCADOS (INCLUYE FERIAS)
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">478200</td>
          <td>
            VENTA AL POR MENOR DE PRODUCTOS TEXTILES, PRENDAS DE VESTIR Y
            CALZADO EN PUESTOS DE VENTA Y MERCADOS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">478900</td>
          <td>
            VENTA AL POR MENOR DE OTROS PRODUCTOS EN PUESTOS DE VENTA Y MERCADOS
            (INCLUYE FERIAS)
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            VENTA AL POR MENOR NO REALIZADA EN COMERCIOS, PUESTOS DE VENTA O
            MERCADOS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">479100</td>
          <td>
            VENTA AL POR MENOR POR CORREO, POR INTERNET Y V&Iacute;A
            TELEF&Oacute;NICA
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">479901</td>
          <td>
            VENTA AL POR MENOR REALIZADA POR INDEPENDIENTES EN LA
            LOCOMOCI&Oacute;N COLECTIVA (LEY 20.388)
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">479902</td>
          <td>VENTA AL POR MENOR MEDIANTE MAQUINAS EXPENDEDORAS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">479903</td>
          <td>
            VENTA AL POR MENOR POR COMISIONISTAS (NO DEPENDIENTES DE COMERCIOS)
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">479909</td>
          <td>
            OTRAS ACTIVIDADES DE VENTA POR MENOR NO REALIZADAS EN COMERCIOS,
            PUESTOS DE VENTA O MERCADOS N.C.P.
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <th colspan="5">
            <a name="8">
              <font color="#000000">TRANSPORTE Y ALMACENAMIENTO</font>
            </a>
          </th>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            TRANSPORTE POR
            FERROCARRIL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">491100</td>
          <td>TRANSPORTE INTERURBANO DE PASAJEROS POR FERROCARRIL</td>
          <td>NO</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">491200</td>
          <td>TRANSPORTE DE CARGA POR FERROCARRIL</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            OTRAS ACTIVIDADES DE TRANSPORTE POR V&Iacute;A
            TERRESTRE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">492110</td>
          <td>
            TRANSPORTE URBANO Y SUBURBANO DE PASAJEROS V&Iacute;A METRO Y
            METROTREN
          </td>
          <td>NO</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">492120</td>
          <td>
            TRANSPORTE URBANO Y SUBURBANO DE PASAJEROS V&Iacute;A
            LOCOMOCI&Oacute;N COLECTIVA
          </td>
          <td>NO</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">492130</td>
          <td>TRANSPORTE DE PASAJEROS V&Iacute;A TAXI COLECTIVO</td>
          <td>NO</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">492190</td>
          <td>
            OTRAS ACTIVIDADES DE TRANSPORTE URBANO Y SUBURBANO DE PASAJEROS POR
            V&Iacute;A TERRESTRE N.C.P.
          </td>
          <td>NO</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">492210</td>
          <td>SERVICIOS DE TRANSPORTE DE ESCOLARES</td>
          <td>NO</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">492220</td>
          <td>SERVICIOS DE TRANSPORTE DE TRABAJADORES</td>
          <td>NO</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">492230</td>
          <td>
            SERVICIOS DE TRANSPORTE DE PASAJEROS EN TAXIS LIBRES Y RADIOTAXIS
          </td>
          <td>NO</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">492240</td>
          <td>SERVICIOS DE TRANSPORTE A TURISTAS</td>
          <td>NO</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">492250</td>
          <td>TRANSPORTE DE PASAJEROS EN BUSES INTERURBANOS&nbsp;</td>
          <td>NO</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">492290</td>
          <td>
            OTRAS ACTIVIDADES DE TRANSPORTE DE PASAJEROS POR V&Iacute;A
            TERRESTRE N.C.P.
          </td>
          <td>NO</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">492300</td>
          <td>TRANSPORTE DE CARGA POR CARRETERA</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            TRANSPORTE POR
            TUBER&Iacute;AS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">493010</td>
          <td>TRANSPORTE POR OLEODUCTOS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">493020</td>
          <td>TRANSPORTE POR GASODUCTOS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">493090</td>
          <td>OTRAS ACTIVIDADES DE TRANSPORTE POR TUBER&Iacute;AS N.C.P.</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            TRANSPORTE MAR&Iacute;TIMO Y DE
            CABOTAJE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">501100</td>
          <td>TRANSPORTE DE PASAJEROS MAR&Iacute;TIMO Y DE CABOTAJE</td>
          <td>NO</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">501200</td>
          <td>TRANSPORTE DE CARGA MAR&Iacute;TIMO Y DE CABOTAJE</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            TRANSPORTE POR V&Iacute;AS DE NAVEGACI&Oacute;N
            INTERIORES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">502100</td>
          <td>
            TRANSPORTE DE PASAJEROS POR V&Iacute;AS DE NAVEGACI&Oacute;N
            INTERIORES
          </td>
          <td>NO</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">502200</td>
          <td>
            TRANSPORTE DE CARGA POR V&Iacute;AS DE NAVEGACI&Oacute;N INTERIORES
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            TRANSPORTE DE PASAJEROS POR V&Iacute;A
            A&Eacute;REA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">511000</td>
          <td>TRANSPORTE DE PASAJEROS POR V&Iacute;A A&Eacute;REA</td>
          <td>NO</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            TRANSPORTE DE CARGA POR V&Iacute;A
            A&Eacute;REA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">512000</td>
          <td>TRANSPORTE DE CARGA POR V&Iacute;A A&Eacute;REA</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            ALMACENAMIENTO Y
            DEP&Oacute;SITO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">521001</td>
          <td>
            EXPLOTACI&Oacute;N DE FRIGOR&Iacute;FICOS PARA ALMACENAMIENTO Y
            DEP&Oacute;SITO
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">521009</td>
          <td>OTROS SERVICIOS DE ALMACENAMIENTO Y DEP&Oacute;SITO N.C.P.</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            ACTIVIDADES DE APOYO AL
            TRANSPORTE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">522110</td>
          <td>EXPLOTACI&Oacute;N DE TERMINALES TERRESTRES DE PASAJEROS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">522120</td>
          <td>
            EXPLOTACI&Oacute;N DE ESTACIONAMIENTOS DE VEH&Iacute;CULOS
            AUTOMOTORES Y PARQU&Iacute;METROS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">522130</td>
          <td>SERVICIOS PRESTADOS POR CONCESIONARIOS DE CARRETERAS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">522190</td>
          <td>
            ACTIVIDADES DE SERVICIOS VINCULADAS AL TRANSPORTE TERRESTRE N.C.P.
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">522200</td>
          <td>
            ACTIVIDADES DE SERVICIOS VINCULADAS AL TRANSPORTE ACU&Aacute;TICO
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">522300</td>
          <td>
            ACTIVIDADES DE SERVICIOS VINCULADAS AL TRANSPORTE A&Eacute;REO
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">522400</td>
          <td>MANIPULACI&Oacute;N DE LA CARGA</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">522910</td>
          <td>AGENCIAS DE ADUANAS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">522920</td>
          <td>AGENCIAS DE NAVES</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">522990</td>
          <td>OTRAS ACTIVIDADES DE APOYO AL TRANSPORTE N.C.P.</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            ACTIVIDADES
            POSTALES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">531000</td>
          <td>ACTIVIDADES POSTALES</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            ACTIVIDADES DE
            MENSAJER&Iacute;A&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">532000</td>
          <td>ACTIVIDADES DE MENSAJER&Iacute;A</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>

        <tr height="20">
          <th colspan="5">
            <a name="9">
              <font color="#000000">
                ACTIVIDADES DE ALOJAMIENTO Y DE SERVICIO DE COMIDAS
              </font>
            </a>
          </th>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            ACTIVIDADES DE ALOJAMIENTO PARA ESTANCIAS
            CORTAS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">551001</td>
          <td>ACTIVIDADES DE HOTELES</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">551002</td>
          <td>ACTIVIDADES DE MOTELES</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">551003</td>
          <td>ACTIVIDADES DE RESIDENCIALES PARA TURISTAS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">551009</td>
          <td>OTRAS ACTIVIDADES DE ALOJAMIENTO PARA TURISTAS N.C.P.</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            ACTIVIDADES DE CAMPAMENTOS, PARQUES DE VEH&Iacute;CULOS DE RECREO Y
            PARQUES DE
            CARAVANAS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">552000</td>
          <td>ACTIVIDADES DE CAMPING Y DE PARQUES PARA CASAS RODANTES</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            OTRAS ACTIVIDADES DE
            ALOJAMIENTO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">559001</td>
          <td>
            ACTIVIDADES DE RESIDENCIALES PARA ESTUDIANTES Y TRABAJADORES&nbsp;
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">559009</td>
          <td>OTRAS ACTIVIDADES DE ALOJAMIENTO N.C.P.</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            ACTIVIDADES DE RESTAURANTES Y DE SERVICIO M&Oacute;VIL DE
            COMIDAS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">561000</td>
          <td>
            ACTIVIDADES DE RESTAURANTES Y DE SERVICIO M&Oacute;VIL DE COMIDAS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            SUMINISTRO DE COMIDAS POR ENCARGO Y OTRAS ACTIVIDADES DE SERVICIO DE
            COMIDAS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">562100</td>
          <td>
            SUMINISTRO DE COMIDAS POR ENCARGO (SERVICIOS DE BANQUETER&Iacute;A)
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">562900</td>
          <td>
            SUMINISTRO INDUSTRIAL DE COMIDAS POR ENCARGO; CONCESI&Oacute;N DE
            SERVICIOS DE ALIMENTACI&Oacute;N&nbsp;
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            ACTIVIDADES DE SERVICIO DE
            BEBIDAS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">563001</td>
          <td>
            ACTIVIDADES DE DISCOTECAS Y CABARET (NIGHT CLUB), CON PREDOMINIO DEL
            SERVICIO DE BEBIDAS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">563009</td>
          <td>OTRAS ACTIVIDADES DE SERVICIO DE BEBIDAS N.C.P.</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <th colspan="5">
            <a name="10">
              <font color="#000000">INFORMACI&Oacute;N Y COMUNICACIONES</font>
            </a>
          </th>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            EDICI&Oacute;N DE LIBROS Y PUBLICACIONES PERI&Oacute;DICAS Y OTRAS
            ACTIVIDADES DE
            EDICI&Oacute;N&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">581100</td>
          <td>EDICI&Oacute;N DE LIBROS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">581200</td>
          <td>EDICI&Oacute;N DE DIRECTORIOS Y LISTAS DE CORREO</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">581300</td>
          <td>
            EDICI&Oacute;N DE DIARIOS, REVISTAS Y OTRAS PUBLICACIONES
            PERI&Oacute;DICAS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">581900</td>
          <td>OTRAS ACTIVIDADES DE EDICI&Oacute;N</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            EDICI&Oacute;N DE PROGRAMAS
            INFORM&Aacute;TICOS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">582000</td>
          <td>EDICI&Oacute;N DE PROGRAMAS INFORM&Aacute;TICOS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            ACTIVIDADES DE PRODUCCI&Oacute;N DE PEL&Iacute;CULAS
            CINEMATOGR&Aacute;FICAS, VIDEOS Y PROGRAMAS DE
            TELEVISI&Oacute;N&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">591100</td>
          <td>
            ACTIVIDADES DE PRODUCCI&Oacute;N DE PEL&Iacute;CULAS
            CINEMATOGR&Aacute;FICAS, VIDEOS Y PROGRAMAS DE TELEVISI&Oacute;N
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">591200</td>
          <td>
            ACTIVIDADES DE POSTPRODUCCI&Oacute;N DE PEL&Iacute;CULAS
            CINEMATOGR&Aacute;FICAS, VIDEOS Y PROGRAMAS DE TELEVISI&Oacute;N
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">591300</td>
          <td>
            ACTIVIDADES DE DISTRIBUCI&Oacute;N DE PEL&Iacute;CULAS
            CINEMATOGR&Aacute;FICAS, VIDEOS Y PROGRAMAS DE TELEVISI&Oacute;N
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">591400</td>
          <td>
            ACTIVIDADES DE EXHIBICI&Oacute;N DE PEL&Iacute;CULAS
            CINEMATOGR&Aacute;FICAS Y CINTAS DE VIDEO
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            ACTIVIDADES DE GRABACI&Oacute;N DE SONIDO Y EDICI&Oacute;N DE
            M&Uacute;SICA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">592000</td>
          <td>
            ACTIVIDADES DE GRABACI&Oacute;N DE SONIDO Y EDICI&Oacute;N DE
            M&Uacute;SICA
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            TRANSMISIONES DE
            RADIO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">601000</td>
          <td>TRANSMISIONES DE RADIO</td>
          <td>NO</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            PROGRAMACI&Oacute;N Y TRANSMISIONES DE
            TELEVISI&Oacute;N&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">602000</td>
          <td>PROGRAMACI&Oacute;N Y TRANSMISIONES DE TELEVISI&Oacute;N</td>
          <td>NO</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            ACTIVIDADES DE TELECOMUNICACIONES
            AL&Aacute;MBRICAS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">611010</td>
          <td>TELEFON&Iacute;A FIJA</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">611020</td>
          <td>TELEFON&Iacute;A LARGA DISTANCIA</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">611030</td>
          <td>TELEVISI&Oacute;N DE PAGO POR CABLE</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">611090</td>
          <td>
            OTROS SERVICIOS DE TELECOMUNICACIONES AL&Aacute;MBRICAS N.C.P.
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            ACTIVIDADES DE TELECOMUNICACIONES
            INAL&Aacute;MBRICAS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">612010</td>
          <td>TELEFON&Iacute;A M&Oacute;VIL CELULAR</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">612020</td>
          <td>RADIOCOMUNICACIONES M&Oacute;VILES</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">612030</td>
          <td>TELEVISI&Oacute;N DE PAGO INAL&Aacute;MBRICA</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">612090</td>
          <td>
            OTROS SERVICIOS DE TELECOMUNICACIONES INAL&Aacute;MBRICAS N.C.P.
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            ACTIVIDADES DE TELECOMUNICACIONES POR
            SAT&Eacute;LITE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">613010</td>
          <td>TELEFON&Iacute;A M&Oacute;VIL SATELITAL</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">613020</td>
          <td>TELEVISI&Oacute;N DE PAGO SATELITAL</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">613090</td>
          <td>
            OTROS SERVICIOS DE TELECOMUNICACIONES POR SAT&Eacute;LITE N.C.P.
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            OTRAS ACTIVIDADES DE
            TELECOMUNICACIONES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">619010</td>
          <td>CENTROS DE LLAMADOS Y CENTROS DE ACCESO A INTERNET</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">619090</td>
          <td>OTRAS ACTIVIDADES DE TELECOMUNICACIONES N.C.P.</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            ACTIVIDADES DE PROGRAMACI&Oacute;N INFORM&Aacute;TICA,
            CONSULTOR&Iacute;A INFORM&Aacute;TICA Y ACTIVIDADES
            CONEXAS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">620100</td>
          <td>ACTIVIDADES DE PROGRAMACI&Oacute;N INFORM&Aacute;TICA</td>
          <td>G</td>
          <td>G</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">620200</td>
          <td>
            ACTIVIDADES DE CONSULTOR&Iacute;A DE INFORM&Aacute;TICA Y DE
            GESTI&Oacute;N DE INSTALACIONES INFORM&Aacute;TICAS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">620900</td>
          <td>
            OTRAS ACTIVIDADES DE TECNOLOG&Iacute;A DE LA INFORMACI&Oacute;N Y DE
            SERVICIOS INFORM&Aacute;TICOS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            PROCESAMIENTO DE DATOS, HOSPEDAJE Y ACTIVIDADES CONEXAS; PORTALES
            WEB&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">631100</td>
          <td>PROCESAMIENTO DE DATOS, HOSPEDAJE Y ACTIVIDADES CONEXAS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">631200</td>
          <td>PORTALES WEB</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            OTRAS ACTIVIDADES DE SERVICIOS DE
            INFORMACI&Oacute;N&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">639100</td>
          <td>ACTIVIDADES DE AGENCIAS DE NOTICIAS</td>
          <td>NO</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">639900</td>
          <td>OTRAS ACTIVIDADES DE SERVICIOS DE INFORMACI&Oacute;N N.C.P.</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <th colspan="5">
            <a name="11">
              <font color="#000000">ACTIVIDADES FINANCIERAS Y DE SEGUROS</font>
            </a>
          </th>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            INTERMEDIACI&Oacute;N
            MONETARIA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">641100</td>
          <td>BANCA CENTRAL</td>
          <td>SI</td>
          <td>1</td>
          <td>NO</td>
        </tr>
        <tr height="20">
          <td height="20">641910</td>
          <td>ACTIVIDADES BANCARIAS</td>
          <td>SI</td>
          <td>1</td>
          <td>NO</td>
        </tr>
        <tr height="20">
          <td height="20">641990</td>
          <td>OTROS TIPOS DE INTERMEDIACI&Oacute;N MONETARIA N.C.P.</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            ACTIVIDADES DE SOCIEDADES DE
            CARTERA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">642000</td>
          <td>ACTIVIDADES DE SOCIEDADES DE CARTERA</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            FONDOS Y SOCIEDADES DE INVERSI&Oacute;N Y ENTIDADES FINANCIERAS
            SIMILARES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">643000</td>
          <td>
            FONDOS Y SOCIEDADES DE INVERSI&Oacute;N Y ENTIDADES FINANCIERAS
            SIMILARES
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            OTRAS ACTIVIDADES DE SERVICIOS FINANCIEROS, EXCEPTO LAS DE SEGUROS Y
            FONDOS DE
            PENSIONES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">649100</td>
          <td>LEASING FINANCIERO</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">649201</td>
          <td>FINANCIERAS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">649202</td>
          <td>ACTIVIDADES DE CR&Eacute;DITO PRENDARIO</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">649203</td>
          <td>CAJAS DE COMPENSACI&Oacute;N</td>
          <td>G</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">649209</td>
          <td>
            OTRAS ACTIVIDADES DE CONCESI&Oacute;N DE CR&Eacute;DITO N.C.P.
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">649900</td>
          <td>
            OTRAS ACTIVIDADES DE SERVICIOS FINANCIEROS, EXCEPTO LAS DE SEGUROS Y
            FONDOS DE PENSIONES N.C.P.
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            SEGUROS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">651100</td>
          <td>SEGUROS DE VIDA</td>
          <td>SI</td>
          <td>1</td>
          <td>NO</td>
        </tr>
        <tr height="20">
          <td height="20">651210</td>
          <td>SEGUROS GENERALES, EXCEPTO ACTIVIDADES DE ISAPRES</td>
          <td>SI</td>
          <td>1</td>
          <td>NO</td>
        </tr>
        <tr height="20">
          <td height="20">651220</td>
          <td>ACTIVIDADES DE ISAPRES</td>
          <td>SI</td>
          <td>1</td>
          <td>NO</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            REASEGUROS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">652000</td>
          <td>REASEGUROS</td>
          <td>SI</td>
          <td>1</td>
          <td>NO</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            FONDOS DE
            PENSIONES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">653000</td>
          <td>FONDOS DE PENSIONES</td>
          <td>SI</td>
          <td>1</td>
          <td>NO</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            ACTIVIDADES AUXILIARES DE SERVICIOS FINANCIEROS, EXCEPTO LAS DE
            SEGUROS Y FONDOS DE PENSIONES
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">661100</td>
          <td>ADMINISTRACI&Oacute;N DE MERCADOS FINANCIEROS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">661201</td>
          <td>ACTIVIDADES DE SECURITIZADORAS</td>
          <td>SI</td>
          <td>1</td>
          <td>NO</td>
        </tr>
        <tr height="20">
          <td height="20">661202</td>
          <td>CORREDORES DE BOLSA</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">661203</td>
          <td>AGENTES DE VALORES</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">661204</td>
          <td>ACTIVIDADES DE CASAS DE CAMBIO Y OPERADORES DE DIVISA</td>
          <td>G</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">661209</td>
          <td>OTROS SERVICIOS DE CORRETAJE DE VALORES Y COMMODITIES N.C.P.</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">661901</td>
          <td>ACTIVIDADES DE C&Aacute;MARAS DE COMPENSACI&Oacute;N</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">661902</td>
          <td>ADMINISTRACI&Oacute;N DE TARJETAS DE CR&Eacute;DITO</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">661903</td>
          <td>
            EMPRESAS DE ASESOR&Iacute;A Y CONSULTOR&Iacute;A EN INVERSI&Oacute;N
            FINANCIERA; SOCIEDADES DE APOYO AL GIRO
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">661904</td>
          <td>ACTIVIDADES DE CLASIFICADORAS DE RIESGO</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">661909</td>
          <td>
            OTRAS ACTIVIDADES AUXILIARES DE LAS ACTIVIDADES DE SERVICIOS
            FINANCIEROS N.C.P.
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            ACTIVIDADES AUXILIARES DE LAS ACTIVIDADES DE SEGUROS Y FONDOS DE
            PENSIONES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">662100</td>
          <td>
            EVALUACI&Oacute;N DE RIESGOS Y DA&Ntilde;OS (INCLUYE ACTIVIDADES DE
            LIQUIDADORES DE SEGUROS)
          </td>
          <td>G</td>
          <td>G</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">662200</td>
          <td>ACTIVIDADES DE AGENTES Y CORREDORES DE SEGUROS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">662900</td>
          <td>
            OTRAS ACTIVIDADES AUXILIARES DE LAS ACTIVIDADES DE SEGUROS Y FONDOS
            DE PENSIONES
          </td>
          <td>G</td>
          <td>G</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            ACTIVIDADES DE GESTI&Oacute;N DE
            FONDOS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">663010</td>
          <td>ADMINISTRADORAS DE FONDOS DE PENSIONES (AFP)</td>
          <td>SI</td>
          <td>1</td>
          <td>NO</td>
        </tr>
        <tr height="20">
          <td height="20">663091</td>
          <td>ADMINISTRADORAS DE FONDOS DE INVERSI&Oacute;N</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">663092</td>
          <td>ADMINISTRADORAS DE FONDOS MUTUOS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">663093</td>
          <td>
            ADMINISTRADORAS DE FICES (FONDOS DE INVERSI&Oacute;N DE CAPITAL
            EXTRANJERO)
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">663094</td>
          <td>ADMINISTRADORAS DE FONDOS PARA LA VIVIENDA</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">663099</td>
          <td>ADMINISTRADORAS DE FONDOS PARA OTROS FINES N.C.P.</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <th colspan="5">
            <a name="12">
              <font color="#000000">ACTIVIDADES INMOBILIARIAS</font>
            </a>
          </th>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            ACTIVIDADES INMOBILIARIAS REALIZADAS CON BIENES PROPIOS O
            ARRENDADOS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>

        <tr height="20">
          <td height="20">681011</td>
          <td>
            ALQUILER DE BIENES INMUEBLES AMOBLADOS O CON EQUIPOS Y MAQUINARIAS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">681012</td>
          <td>COMPRA, VENTA Y ALQUILER (EXCEPTO AMOBLADOS) DE INMUEBLES</td>
          <td>G</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">681020</td>
          <td>SERVICIOS IMPUTADOS DE ALQUILER DE VIVIENDAS</td>
          <td>G</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              ACTIVIDADES INMOBILIARIAS REALIZADAS A CAMBIO DE UNA
              RETRIBUCI&Oacute;N O POR
              CONTRATA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">682000</td>
          <td>
            ACTIVIDADES INMOBILIARIAS REALIZADAS A CAMBIO DE UNA
            RETRIBUCI&Oacute;N O POR CONTRATA
          </td>
          <td>G</td>
          <td>G</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <th colspan="5">
            <a name="13">
              <font color="#000000">
                ACTIVIDADES PROFESIONALES, CIENTIFICAS Y T&Eacute;CNICAS
              </font>
            </a>
          </th>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              ACTIVIDADES
              JUR&Iacute;DICAS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">691001</td>
          <td>
            SERVICIOS DE ASESORAMIENTO Y REPRESENTACI&Oacute;N JUR&Iacute;DICA
          </td>
          <td>G</td>
          <td>G</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">691002</td>
          <td>SERVICIO NOTARIAL</td>
          <td>NO</td>
          <td>2</td>
          <td>NO</td>
        </tr>
        <tr height="20">
          <td height="20">691003</td>
          <td>CONSERVADOR DE BIENES RA&Iacute;CES</td>
          <td>NO</td>
          <td>2</td>
          <td>NO</td>
        </tr>
        <tr height="20">
          <td height="20">691004</td>
          <td>RECEPTORES JUDICIALES</td>
          <td>NO</td>
          <td>2</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">691009</td>
          <td>
            SERVICIOS DE ARBITRAJE; S&Iacute;NDICOS DE QUIEBRA Y PERITOS
            JUDICIALES; OTRAS ACTIVIDADES JUR&Iacute;DICAS N.C.P.
          </td>
          <td>G</td>
          <td>G</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              ACTIVIDADES DE CONTABILIDAD, TENEDUR&Iacute;A DE LIBROS Y
              AUDITOR&Iacute;A; CONSULTOR&Iacute;A
              FISCAL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">692000</td>
          <td>
            ACTIVIDADES DE CONTABILIDAD, TENEDUR&Iacute;A DE LIBROS Y
            AUDITOR&Iacute;A; CONSULTOR&Iacute;A FISCAL
          </td>
          <td>G</td>
          <td>G</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              ACTIVIDADES DE OFICINAS
              PRINCIPALES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">701000</td>
          <td>ACTIVIDADES DE OFICINAS PRINCIPALES</td>
          <td>G</td>
          <td>G</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              ACTIVIDADES DE CONSULTOR&Iacute;A DE
              GESTI&Oacute;N&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">702000</td>
          <td>ACTIVIDADES DE CONSULTOR&Iacute;A DE GESTI&Oacute;N</td>
          <td>G</td>
          <td>G</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              ACTIVIDADES DE ARQUITECTURA E INGENIER&Iacute;A Y ACTIVIDADES
              CONEXAS DE CONSULTOR&Iacute;A
              T&Eacute;CNICA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">711001</td>
          <td>
            SERVICIOS DE ARQUITECTURA (DISE&Ntilde;O DE EDIFICIOS, DIBUJO DE
            PLANOS DE CONSTRUCCI&Oacute;N, ENTRE OTROS)
          </td>
          <td>G</td>
          <td>G</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">711002</td>
          <td>
            EMPRESAS DE SERVICIOS DE INGENIER&Iacute;A Y ACTIVIDADES CONEXAS DE
            CONSULTOR&Iacute;A T&Eacute;CNICA&nbsp;
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">711003</td>
          <td>
            SERVICIOS PROFESIONALES DE INGENIER&Iacute;A Y ACTIVIDADES CONEXAS
            DE CONSULTOR&Iacute;A T&Eacute;CNICA&nbsp;
          </td>
          <td>G</td>
          <td>G</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            <strong>
              ENSAYOS Y AN&Aacute;LISIS
              T&Eacute;CNICOS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">712001</td>
          <td>
            ACTIVIDADES DE PLANTAS DE REVISI&Oacute;N T&Eacute;CNICA PARA
            VEH&Iacute;CULOS AUTOMOTORES
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">712009</td>
          <td>
            OTROS SERVICIOS DE ENSAYOS Y AN&Aacute;LISIS T&Eacute;CNICOS
            (EXCEPTO ACTIVIDADES DE PLANTAS DE REVISI&Oacute;N T&Eacute;CNICA)
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            INVESTIGACIONES Y DESARROLLO EXPERIMENTAL EN EL CAMPO DE LAS
            CIENCIAS NATURALES Y LA INGENIER&Iacute;A
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">721000</td>
          <td>
            INVESTIGACIONES Y DESARROLLO EXPERIMENTAL EN EL CAMPO DE LAS
            CIENCIAS NATURALES Y LA INGENIER&Iacute;A
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            INVESTIGACIONES Y DESARROLLO EXPERIMENTAL EN EL CAMPO DE LAS
            CIENCIAS SOCIALES Y LAS HUMANIDADES
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">722000</td>
          <td>
            INVESTIGACIONES Y DESARROLLO EXPERIMENTAL EN EL CAMPO DE LAS
            CIENCIAS SOCIALES Y LAS HUMANIDADES
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            PUBLICIDAD&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">731001</td>
          <td>SERVICIOS DE PUBLICIDAD PRESTADOS POR EMPRESAS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">731002</td>
          <td>SERVICIOS DE PUBLICIDAD PRESTADOS POR PROFESIONALES</td>
          <td>G</td>
          <td>G</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            ESTUDIOS DE MERCADO Y ENCUESTAS DE OPINI&Oacute;N
            P&Uacute;BLICA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">732000</td>
          <td>
            ESTUDIOS DE MERCADO Y ENCUESTAS DE OPINI&Oacute;N P&Uacute;BLICA
          </td>
          <td>G</td>
          <td>G</td>
          <td>S</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            ACTIVIDADES ESPECIALIZADAS DE
            DISE&Ntilde;O&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">741001</td>
          <td>ACTIVIDADES DE DISE&Ntilde;O DE VESTUARIO</td>
          <td>G</td>
          <td>G</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">741002</td>
          <td>
            ACTIVIDADES DE DISE&Ntilde;O Y DECORACI&Oacute;N DE INTERIORES
          </td>
          <td>G</td>
          <td>G</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">741009</td>
          <td>OTRAS ACTIVIDADES ESPECIALIZADAS DE DISE&Ntilde;O N.C.P.</td>
          <td>G</td>
          <td>G</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            ACTIVIDADES DE
            FOTOGRAF&Iacute;A&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">742001</td>
          <td>
            SERVICIOS DE REVELADO, IMPRESI&Oacute;N Y AMPLIACI&Oacute;N DE
            FOTOGRAF&Iacute;AS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">742002</td>
          <td>SERVICIOS Y ACTIVIDADES DE FOTOGRAF&Iacute;A&nbsp;</td>
          <td>G</td>
          <td>G</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">742003</td>
          <td>SERVICIOS PERSONALES DE FOTOGRAF&Iacute;A&nbsp;</td>
          <td>G</td>
          <td>G</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            OTRAS ACTIVIDADES PROFESIONALES, CIENT&Iacute;FICAS Y
            T&Eacute;CNICAS
            N.C.P.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">749001</td>
          <td>
            ASESOR&Iacute;A Y GESTI&Oacute;N EN LA COMPRA O VENTA DE
            PEQUE&Ntilde;AS Y MEDIANAS EMPRESAS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">749002</td>
          <td>
            SERVICIOS DE TRADUCCI&Oacute;N E INTERPRETACI&Oacute;N PRESTADOS POR
            EMPRESAS
          </td>
          <td>NO</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">749003</td>
          <td>
            SERVICIOS PERSONALES DE TRADUCCI&Oacute;N E INTERPRETACI&Oacute;N
          </td>
          <td>G</td>
          <td>G</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">749004</td>
          <td>
            ACTIVIDADES DE AGENCIAS Y AGENTES DE REPRESENTACI&Oacute;N DE
            ACTORES, DEPORTISTAS Y OTRAS FIGURAS P&Uacute;BLICAS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">749009</td>
          <td>
            OTRAS ACTIVIDADES PROFESIONALES, CIENT&Iacute;FICAS Y
            T&Eacute;CNICAS N.C.P.
          </td>
          <td>G</td>
          <td>G</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            ACTIVIDADES
            VETERINARIAS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">750001</td>
          <td>ACTIVIDADES DE CL&Iacute;NICAS VETERINARIAS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">750002</td>
          <td>
            ACTIVIDADES DE VETERINARIOS, T&Eacute;CNICOS Y OTRO PERSONAL
            AUXILIAR, PRESTADOS DE FORMA INDEPENDIENTE
          </td>
          <td>NO</td>
          <td>2</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <th colspan="5">
            <a name="14">
              <font color="#000000">
                ACTIVIDADES DE SERVICIOS ADMINISTRATIVOS Y DE APOYO
              </font>
            </a>
          </th>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            ALQUILER Y ARRENDAMIENTO DE VEH&Iacute;CULOS
            AUTOMOTORES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">771000</td>
          <td>ALQUILER DE VEH&Iacute;CULOS AUTOMOTORES SIN CHOFER</td>
          <td>SI</td>
          <td>1</td>
          <td>S</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            ALQUILER Y ARRENDAMIENTO DE EFECTOS PERSONALES Y ENSERES
            DOM&Eacute;STICOS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">772100</td>
          <td>ALQUILER Y ARRENDAMIENTO DE EQUIPO RECREATIVO Y DEPORTIVO</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">772200</td>
          <td>ALQUILER DE CINTAS DE VIDEO Y DISCOS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">772900</td>
          <td>
            ALQUILER DE OTROS EFECTOS PERSONALES Y ENSERES DOM&Eacute;STICOS
            (INCLUYE MOBILIARIO PARA EVENTOS)
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            ALQUILER Y ARRENDAMIENTO DE OTROS TIPOS DE MAQUINARIA, EQUIPO Y
            BIENES
            TANGIBLES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">773001</td>
          <td>
            ALQUILER DE EQUIPOS DE TRANSPORTE SIN OPERARIO, EXCEPTO
            VEH&Iacute;CULOS AUTOMOTORES
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">773002</td>
          <td>
            ALQUILER DE MAQUINARIA Y EQUIPO AGROPECUARIO, FORESTAL, DE
            CONSTRUCCI&Oacute;N E ING. CIVIL, SIN OPERARIOS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">773003</td>
          <td>
            ALQUILER DE MAQUINARIA Y EQUIPO DE OFICINA, SIN OPERARIOS (SIN
            SERVICIO ADMINISTRATIVO)
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">773009</td>
          <td>
            ALQUILER DE OTROS TIPOS DE MAQUINARIAS Y EQUIPOS SIN OPERARIO N.C.P.
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            ARRENDAMIENTO DE PROPIEDAD INTELECTUAL Y SIMILARES, EXCEPTO OBRAS
            PROTEGIDAS POR DERECHOS DE AUTOR
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">774000</td>
          <td>
            ARRENDAMIENTO DE PROPIEDAD INTELECTUAL Y SIMILARES, EXCEPTO OBRAS
            PROTEGIDAS POR DERECHOS DE AUTOR
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            ACTIVIDADES DE AGENCIAS DE
            EMPLEO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">781000</td>
          <td>ACTIVIDADES DE AGENCIAS DE EMPLEO</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            ACTIVIDADES DE AGENCIAS DE EMPLEO
            TEMPORAL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">782000</td>
          <td>
            ACTIVIDADES DE AGENCIAS DE EMPLEO TEMPORAL (INCLUYE EMPRESAS DE
            SERVICIOS TRANSITORIOS)
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            OTRAS ACTIVIDADES DE DOTACI&Oacute;N DE RECURSOS
            HUMANOS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">783000</td>
          <td>OTRAS ACTIVIDADES DE DOTACI&Oacute;N DE RECURSOS HUMANOS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            ACTIVIDADES DE AGENCIAS DE VIAJES Y OPERADORES
            TUR&Iacute;STICOS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">791100</td>
          <td>ACTIVIDADES DE AGENCIAS DE VIAJES</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">791200</td>
          <td>ACTIVIDADES DE OPERADORES TUR&Iacute;STICOS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            OTROS SERVICIOS DE RESERVAS Y ACTIVIDADES
            CONEXAS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">799000</td>
          <td>
            OTROS SERVICIOS DE RESERVAS Y ACTIVIDADES CONEXAS (INCLUYE VENTA DE
            ENTRADAS PARA TEATRO, Y OTROS)
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            ACTIVIDADES DE SEGURIDAD
            PRIVADA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">801001</td>
          <td>SERVICIOS DE SEGURIDAD PRIVADA PRESTADOS POR EMPRESAS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">801002</td>
          <td>
            SERVICIO DE TRANSPORTE DE VALORES EN VEH&Iacute;CULOS BLINDADOS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">801003</td>
          <td>SERVICIOS DE SEGURIDAD PRIVADA PRESTADOS POR INDEPENDIENTES</td>
          <td>NO</td>
          <td>2</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            ACTIVIDADES DE SERVICIOS DE SISTEMAS DE
            SEGURIDAD&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">802000</td>
          <td>
            ACTIVIDADES DE SERVICIOS DE SISTEMAS DE SEGURIDAD (INCLUYE SERVICIOS
            DE CERRAJER&Iacute;A)
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            ACTIVIDADES DE
            INVESTIGACI&Oacute;N&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">803000</td>
          <td>
            ACTIVIDADES DE INVESTIGACI&Oacute;N (INCLUYE ACTIVIDADES DE
            INVESTIGADORES Y DETECTIVES PRIVADOS)
          </td>
          <td>G</td>
          <td>G</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            ACTIVIDADES COMBINADAS DE APOYO A
            INSTALACIONES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">811000</td>
          <td>ACTIVIDADES COMBINADAS DE APOYO A INSTALACIONES</td>
          <td>G</td>
          <td>G</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            ACTIVIDADES DE
            LIMPIEZA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">812100</td>
          <td>LIMPIEZA GENERAL DE EDIFICIOS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">812901</td>
          <td>
            DESRATIZACI&Oacute;N, DESINFECCI&Oacute;N Y EXTERMINIO DE PLAGAS NO
            AGR&Iacute;COLAS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">812909</td>
          <td>
            OTRAS ACTIVIDADES DE LIMPIEZA DE EDIFICIOS E INSTALACIONES
            INDUSTRIALES N.C.P.
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            ACTIVIDADES DE PAISAJISMO Y SERVICIOS DE MANTENIMIENTO
            CONEXOS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">813000</td>
          <td>
            ACTIVIDADES DE PAISAJISMO, SERVICIOS DE JARDINER&Iacute;A Y
            SERVICIOS CONEXOS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            ACTIVIDADES ADMINISTRATIVAS Y DE APOYO DE
            OFICINA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">821100</td>
          <td>
            ACTIVIDADES COMBINADAS DE SERVICIOS ADMINISTRATIVOS DE OFICINA
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">821900</td>
          <td>
            FOTOCOPIADO, PREPARACI&Oacute;N DE DOCUMENTOS Y OTRAS ACTIVIDADES
            ESPECIALIZADAS DE APOYO DE OFICINA
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            ACTIVIDADES DE
            CALL-CENTER&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">822000</td>
          <td>ACTIVIDADES DE CALL-CENTER</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            ORGANIZACI&Oacute;N DE CONVENCIONES Y EXPOSICIONES
            COMERCIALES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">823000</td>
          <td>
            ORGANIZACI&Oacute;N DE CONVENCIONES Y EXPOSICIONES COMERCIALES
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            ACTIVIDADES DE SERVICIOS DE APOYO A LAS EMPRESAS
            N.C.P.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">829110</td>
          <td>ACTIVIDADES DE AGENCIAS DE COBRO</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">829120</td>
          <td>ACTIVIDADES DE AGENCIAS DE CALIFICACI&Oacute;N CREDITICIA</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">829200</td>
          <td>ACTIVIDADES DE ENVASADO Y EMPAQUETADO</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">829900</td>
          <td>OTRAS ACTIVIDADES DE SERVICIOS DE APOYO A LAS EMPRESAS N.C.P.</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <th colspan="5">
            <a name="15">
              <font color="#000000">
                ADMINISTRACI&Oacute;N P&Uacute;BLICA Y DEFENSA; PLANES DE
                SEGURIDAD SOCIAL DE AFILIACI&Oacute;N OBLIGATORIA
              </font>
            </a>
          </th>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            ADMINISTRACI&Oacute;N DEL ESTADO Y APLICACI&Oacute;N DE LA
            POL&Iacute;TICA ECON&Oacute;MICA Y SOCIAL DE LA
            COMUNIDAD&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">841100</td>
          <td>
            ACTIVIDADES DE LA ADMINISTRACI&Oacute;N P&Uacute;BLICA EN GENERAL
          </td>
          <td>SI</td>
          <td>1</td>
          <td>NO</td>
        </tr>
        <tr height="20">
          <td height="20">841200</td>
          <td>
            REGULACI&Oacute;N DE LAS ACTIVIDADES DE ORGANISMOS QUE PRESTAN
            SERVICIOS SANITARIOS, EDUCATIVOS, CULTURALES
          </td>
          <td>SI</td>
          <td>1</td>
          <td>NO</td>
        </tr>
        <tr height="20">
          <td height="20">841300</td>
          <td>
            REGULACI&Oacute;N Y FACILITACI&Oacute;N DE LA ACTIVIDAD
            ECON&Oacute;MICA
          </td>
          <td>SI</td>
          <td>1</td>
          <td>NO</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            PRESTACI&Oacute;N DE SERVICIOS A LA COMUNIDAD EN
            GENERAL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">842100</td>
          <td>RELACIONES EXTERIORES</td>
          <td>G</td>
          <td>1</td>
          <td>NO</td>
        </tr>
        <tr height="20">
          <td height="20">842200</td>
          <td>ACTIVIDADES DE DEFENSA</td>
          <td>G</td>
          <td>1</td>
          <td>NO</td>
        </tr>
        <tr height="20">
          <td height="20">842300</td>
          <td>
            ACTIVIDADES DE MANTENIMIENTO DEL ORDEN P&Uacute;BLICO Y DE SEGURIDAD
          </td>
          <td>G</td>
          <td>1</td>
          <td>NO</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            ACTIVIDADES DE PLANES DE SEGURIDAD SOCIAL DE AFILIACI&Oacute;N
            OBLIGATORIA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">843010</td>
          <td>FONDO NACIONAL DE SALUD (FONASA)&nbsp;</td>
          <td>G</td>
          <td>1</td>
          <td>NO</td>
        </tr>
        <tr height="20">
          <td height="20">843020</td>
          <td>INSTITUTO DE PREVISI&Oacute;N SOCIAL (IPS)</td>
          <td>G</td>
          <td>1</td>
          <td>NO</td>
        </tr>
        <tr height="20">
          <td height="20">843090</td>
          <td>
            OTROS PLANES DE SEGURIDAD SOCIAL DE AFILIACI&Oacute;N OBLIGATORIA
            N.C.P.
          </td>
          <td>G</td>
          <td>1</td>
          <td>NO</td>
        </tr>
        <tr height="20">
          <th colspan="5">
            <a name="16">
              <font color="#000000">ENSE&Ntilde;ANZA</font>
            </a>
          </th>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            ENSE&Ntilde;ANZA PREESCOLAR, PRIMARIA, SECUNDARIA CIENT&Iacute;FICO
            HUMANISTA Y T&Eacute;CNICO PROFESIONAL
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">850011</td>
          <td>ENSE&Ntilde;ANZA PREESCOLAR P&Uacute;BLICA</td>
          <td>NO</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">850012</td>
          <td>
            ENSE&Ntilde;ANZA PRIMARIA, SECUNDARIA CIENT&Iacute;FICO HUMANISTA Y
            T&Eacute;CNICO PROFESIONAL P&Uacute;BLICA
          </td>
          <td>NO</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">850021</td>
          <td>ENSE&Ntilde;ANZA PREESCOLAR PRIVADA</td>
          <td>NO</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">850022</td>
          <td>
            ENSE&Ntilde;ANZA PRIMARIA, SECUNDARIA CIENT&Iacute;FICO HUMANISTA Y
            T&Eacute;CNICO PROFESIONAL PRIVADA
          </td>
          <td>NO</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            ENSE&Ntilde;ANZA
            SUPERIOR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">853110</td>
          <td>ENSE&Ntilde;ANZA SUPERIOR EN UNIVERSIDADES P&Uacute;BLICAS</td>
          <td>NO</td>
          <td>1</td>
          <td>NO</td>
        </tr>
        <tr height="20">
          <td height="20">853120</td>
          <td>ENSE&Ntilde;ANZA SUPERIOR EN UNIVERSIDADES PRIVADAS</td>
          <td>NO</td>
          <td>1</td>
          <td>NO</td>
        </tr>
        <tr height="20">
          <td height="20">853201</td>
          <td>ENSE&Ntilde;ANZA SUPERIOR EN INSTITUTOS PROFESIONALES</td>
          <td>NO</td>
          <td>1</td>
          <td>NO</td>
        </tr>
        <tr height="20">
          <td height="20">853202</td>
          <td>
            ENSE&Ntilde;ANZA SUPERIOR EN CENTROS DE FORMACI&Oacute;N
            T&Eacute;CNICA
          </td>
          <td>NO</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            OTROS TIPOS DE
            ENSE&Ntilde;ANZA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">854100</td>
          <td>ENSE&Ntilde;ANZA DEPORTIVA Y RECREATIVA</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">854200</td>
          <td>ENSE&Ntilde;ANZA CULTURAL</td>
          <td>NO</td>
          <td>G</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">854901</td>
          <td>ENSE&Ntilde;ANZA PREUNIVERSITARIA</td>
          <td>NO</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">854902</td>
          <td>SERVICIOS PERSONALES DE EDUCACI&Oacute;N</td>
          <td>NO</td>
          <td>2</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">854909</td>
          <td>OTROS TIPOS DE ENSE&Ntilde;ANZA N.C.P.</td>
          <td>NO</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            ACTIVIDADES DE APOYO A LA
            ENSE&Ntilde;ANZA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">855000</td>
          <td>ACTIVIDADES DE APOYO A LA ENSE&Ntilde;ANZA</td>
          <td>G</td>
          <td>G</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <th colspan="5">
            <a name="17">
              <font color="#000000">
                ACTIVIDADES DE ATENCI&Oacute;N DE LA SALUD HUMANA Y DE
                ASISTENCIA SOCIAL
              </font>
            </a>
          </th>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            ACTIVIDADES DE HOSPITALES P&Uacute;BLICOS Y
            PRIVADOS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">861010</td>
          <td>ACTIVIDADES DE HOSPITALES Y CL&Iacute;NICAS P&Uacute;BLICAS</td>
          <td>SI</td>
          <td>1</td>
          <td>NO</td>
        </tr>
        <tr height="20">
          <td height="20">861020</td>
          <td>ACTIVIDADES DE HOSPITALES Y CL&Iacute;NICAS PRIVADAS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            ACTIVIDADES DE M&Eacute;DICOS Y
            ODONT&Oacute;LOGOS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">862010</td>
          <td>
            ACTIVIDADES DE CENTROS DE SALUD MUNICIPALIZADOS (SERVICIOS DE SALUD
            P&Uacute;BLICA)
          </td>
          <td>G</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">862021</td>
          <td>
            CENTROS M&Eacute;DICOS PRIVADOS (ESTABLECIMIENTOS DE ATENCI&Oacute;N
            AMBULATORIA)
          </td>
          <td>NO</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">862022</td>
          <td>
            CENTROS DE ATENCI&Oacute;N ODONTOL&Oacute;GICA PRIVADOS
            (ESTABLECIMIENTOS DE ATENCI&Oacute;N AMBULATORIA)
          </td>
          <td>NO</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">862031</td>
          <td>SERVICIOS DE M&Eacute;DICOS PRESTADOS DE FORMA INDEPENDIENTE</td>
          <td>NO</td>
          <td>2</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">862032</td>
          <td>
            SERVICIOS DE ODONT&Oacute;LOGOS PRESTADOS DE FORMA INDEPENDIENTE
          </td>
          <td>NO</td>
          <td>2</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            OTRAS ACTIVIDADES DE ATENCI&Oacute;N DE LA SALUD
            HUMANA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">869010</td>
          <td>
            ACTIVIDADES DE LABORATORIOS CL&Iacute;NICOS Y BANCOS DE SANGRE
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">869091</td>
          <td>
            OTROS SERVICIOS DE ATENCI&Oacute;N DE LA SALUD HUMANA PRESTADOS POR
            EMPRESAS
          </td>
          <td>G</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">869092</td>
          <td>
            SERVICIOS PRESTADOS DE FORMA INDEPENDIENTE POR OTROS PROFESIONALES
            DE LA SALUD
          </td>
          <td>NO</td>
          <td>2</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            ACTIVIDADES DE ATENCI&Oacute;N DE ENFERMER&Iacute;A EN
            INSTITUCIONES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">871000</td>
          <td>
            ACTIVIDADES DE ATENCI&Oacute;N DE ENFERMER&Iacute;A EN INSTITUCIONES
          </td>
          <td>NO</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            ACTIVIDADES DE ATENCI&Oacute;N EN INSTITUCIONES PARA PERSONAS CON
            DISCAPACIDAD MENTAL Y TOXIC&Oacute;MANOS&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">872000</td>
          <td>
            ACTIVIDADES DE ATENCI&Oacute;N EN INSTITUCIONES PARA PERSONAS CON
            DISCAPACIDAD MENTAL Y TOXIC&Oacute;MANOS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            ACTIVIDADES DE ATENCI&Oacute;N EN INSTITUCIONES PARA PERSONAS DE
            EDAD Y PERSONAS CON
            DISCAPACIDAD&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">873000</td>
          <td>
            ACTIVIDADES DE ATENCI&Oacute;N EN INSTITUCIONES PARA PERSONAS DE
            EDAD Y PERSONAS CON DISCAPACIDAD F&Iacute;SICA
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            OTRAS ACTIVIDADES DE ATENCI&Oacute;N EN
            INSTITUCIONES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">879000</td>
          <td>OTRAS ACTIVIDADES DE ATENCI&Oacute;N EN INSTITUCIONES</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            ACTIVIDADES DE ASISTENCIA SOCIAL SIN ALOJAMIENTO PARA PERSONAS DE
            EDAD Y PERSONAS CON DISCAPACIDAD
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">881000</td>
          <td>
            ACTIVIDADES DE ASISTENCIA SOCIAL SIN ALOJAMIENTO PARA PERSONAS DE
            EDAD Y PERSONAS CON DISCAPACIDAD
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            OTRAS ACTIVIDADES DE ASISTENCIA SOCIAL SIN
            ALOJAMIENTO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">889000</td>
          <td>OTRAS ACTIVIDADES DE ASISTENCIA SOCIAL SIN ALOJAMIENTO</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <th colspan="5">
            <a name="18">
              <font color="#000000">
                ACTIVIDADES ART&Iacute;STICAS, DE ENTRETENIMIENTO Y RECREATIVAS
              </font>
            </a>
          </th>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            ACTIVIDADES CREATIVAS, ART&Iacute;STICAS Y DE
            ENTRETENIMIENTO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">900001</td>
          <td>
            SERVICIOS DE PRODUCCI&Oacute;N DE OBRAS DE TEATRO, CONCIERTOS,
            ESPECT&Aacute;CULOS DE DANZA, OTRAS PROD. ESC&Eacute;NICAS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">900002</td>
          <td>
            ACTIVIDADES ART&Iacute;STICAS REALIZADAS POR BANDAS DE
            M&Uacute;SICA, COMPA&Ntilde;&Iacute;AS DE TEATRO, CIRCENSES Y
            SIMILARES
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">900003</td>
          <td>
            ACTIVIDADES DE ARTISTAS REALIZADAS DE FORMA INDEPENDIENTE: ACTORES,
            M&Uacute;SICOS, ESCRITORES, ENTRE OTROS
          </td>
          <td>NO</td>
          <td>2</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">900004</td>
          <td>SERVICIOS PRESTADOS POR PERIODISTAS INDEPENDIENTES</td>
          <td>NO</td>
          <td>2</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">900009</td>
          <td>
            OTRAS ACTIVIDADES CREATIVAS, ART&Iacute;STICAS Y DE ENTRETENIMIENTO
            N.C.P.
          </td>
          <td>G</td>
          <td>G</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            ACTIVIDADES DE BIBLIOTECAS, ARCHIVOS Y MUSEOS Y OTRAS ACTIVIDADES
            CULTURALES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">910100</td>
          <td>ACTIVIDADES DE BIBLIOTECAS Y ARCHIVOS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">910200</td>
          <td>
            ACTIVIDADES DE MUSEOS, GESTI&Oacute;N DE LUGARES Y EDIFICIOS
            HIST&Oacute;RICOS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">910300</td>
          <td>
            ACTIVIDADES DE JARDINES BOT&Aacute;NICOS, ZOOL&Oacute;GICOS Y
            RESERVAS NATURALES
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            ACTIVIDADES DE JUEGOS DE AZAR Y
            APUESTAS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">920010</td>
          <td>ACTIVIDADES DE CASINOS DE JUEGOS</td>
          <td>SI</td>
          <td>1</td>
          <td>NO</td>
        </tr>
        <tr height="20">
          <td height="20">920090</td>
          <td>OTRAS ACTIVIDADES DE JUEGOS DE AZAR Y APUESTAS N.C.P.</td>
          <td>SI</td>
          <td>1</td>
          <td>NO</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            ACTIVIDADES
            DEPORTIVAS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">931101</td>
          <td>HIP&Oacute;DROMOS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">931102</td>
          <td>
            GESTI&Oacute;N DE SALAS DE BILLAR; GESTI&Oacute;N DE SALAS DE BOLOS
            (BOWLING)
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">931109</td>
          <td>GESTI&Oacute;N DE OTRAS INSTALACIONES DEPORTIVAS N.C.P.</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">931201</td>
          <td>ACTIVIDADES DE CLUBES DE F&Uacute;TBOL AMATEUR Y PROFESIONAL</td>
          <td>G</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">931209</td>
          <td>ACTIVIDADES DE OTROS CLUBES DEPORTIVOS N.C.P.</td>
          <td>G</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">931901</td>
          <td>
            PROMOCI&Oacute;N Y ORGANIZACI&Oacute;N DE COMPETENCIAS DEPORTIVAS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">931909</td>
          <td>OTRAS ACTIVIDADES DEPORTIVAS N.C.P.</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            OTRAS ACTIVIDADES DE ESPARCIMIENTO Y
            RECREATIVAS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">932100</td>
          <td>
            ACTIVIDADES DE PARQUES DE ATRACCIONES Y PARQUES TEM&Aacute;TICOS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">932901</td>
          <td>
            GESTI&Oacute;N DE SALAS DE POOL; GESTI&Oacute;N (EXPLOTACI&Oacute;N)
            DE JUEGOS ELECTR&Oacute;NICOS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">932909</td>
          <td>OTRAS ACTIVIDADES DE ESPARCIMIENTO Y RECREATIVAS N.C.P.</td>
          <td>G</td>
          <td>G</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <th colspan="5">
            <a name="19">
              <font color="#000000">OTRAS ACTIVIDADES DE SERVICIOS</font>
            </a>
          </th>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            ACTIVIDADES DE ASOCIACIONES EMPRESARIALES, PROFESIONALES Y DE
            EMPLEADORES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">941100</td>
          <td>ACTIVIDADES DE ASOCIACIONES EMPRESARIALES Y DE EMPLEADORES</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">941200</td>
          <td>ACTIVIDADES DE ASOCIACIONES PROFESIONALES</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            ACTIVIDADES DE
            SINDICATOS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">942000</td>
          <td>ACTIVIDADES DE SINDICATOS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            ACTIVIDADES DE OTRAS
            ASOCIACIONES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">949100</td>
          <td>ACTIVIDADES DE ORGANIZACIONES RELIGIOSAS</td>
          <td>SI</td>
          <td>1</td>
          <td>NO</td>
        </tr>
        <tr height="20">
          <td height="20">949200</td>
          <td>ACTIVIDADES DE ORGANIZACIONES POL&Iacute;TICAS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">949901</td>
          <td>ACTIVIDADES DE CENTROS DE MADRES</td>
          <td>SI</td>
          <td>1</td>
          <td>NO</td>
        </tr>
        <tr height="20">
          <td height="20">949902</td>
          <td>ACTIVIDADES DE CLUBES SOCIALES</td>
          <td>SI</td>
          <td>1</td>
          <td>NO</td>
        </tr>
        <tr height="20">
          <td height="20">949903</td>
          <td>
            FUNDACIONES Y CORPORACIONES; ASOCIACIONES QUE PROMUEVEN ACTIVIDADES
            CULTURALES O RECREATIVAS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>NO</td>
        </tr>
        <tr height="20">
          <td height="20">949904</td>
          <td>CONSEJO DE ADMINISTRACI&Oacute;N DE EDIFICIOS Y CONDOMINIOS</td>
          <td>G</td>
          <td>1</td>
          <td>NO</td>
        </tr>
        <tr height="20">
          <td height="20">949909</td>
          <td>ACTIVIDADES DE OTRAS ASOCIACIONES N.C.P.</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            REPARACI&Oacute;N DE COMPUTADORES Y EQUIPO DE
            COMUNICACIONES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">951100</td>
          <td>REPARACI&Oacute;N DE COMPUTADORES Y EQUIPO PERIF&Eacute;RICO</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">951200</td>
          <td>
            REPARACI&Oacute;N DE EQUIPO DE COMUNICACIONES (INCLUYE LA
            REPARACI&Oacute;N TEL&Eacute;FONOS CELULARES)
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            REPARACI&Oacute;N DE EFECTOS PERSONALES Y ENSERES
            DOM&Eacute;STICOS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">952100</td>
          <td>
            REPARACI&Oacute;N DE APARATOS ELECTR&Oacute;NICOS DE CONSUMO
            (INCLUYE APARATOS DE TELEVISI&Oacute;N Y RADIO)
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">952200</td>
          <td>
            REPARACI&Oacute;N DE APARATOS DE USO DOM&Eacute;STICO, EQUIPO
            DOM&Eacute;STICO Y DE JARDINER&Iacute;A
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">952300</td>
          <td>REPARACI&Oacute;N DE CALZADO Y DE ART&Iacute;CULOS DE CUERO</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">952400</td>
          <td>REPARACI&Oacute;N DE MUEBLES Y ACCESORIOS DOM&Eacute;STICOS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">952900</td>
          <td>
            REPARACI&Oacute;N DE OTROS EFECTOS PERSONALES Y ENSERES
            DOM&Eacute;STICOS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            OTRAS ACTIVIDADES DE SERVICIOS
            PERSONALES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">960100</td>
          <td>
            LAVADO Y LIMPIEZA, INCLUIDA LA LIMPIEZA EN SECO, DE PRODUCTOS
            TEXTILES Y DE PIEL
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">960200</td>
          <td>PELUQUER&Iacute;A Y OTROS TRATAMIENTOS DE BELLEZA</td>
          <td>G</td>
          <td>G</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">960310</td>
          <td>SERVICIOS FUNERARIOS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">960320</td>
          <td>SERVICIOS DE CEMENTERIOS</td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">960901</td>
          <td>
            SERVICIOS DE ADIESTRAMIENTO, GUARDER&Iacute;A, PELUQUER&Iacute;A,
            PASEO DE MASCOTAS (EXCEPTO ACT. VETERINARIAS)
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">960902</td>
          <td>
            ACTIVIDADES DE SALONES DE MASAJES, BA&Ntilde;OS TURCOS, SAUNAS,
            SERVICIO DE BA&Ntilde;OS P&Uacute;BLICOS
          </td>
          <td>SI</td>
          <td>1</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <td height="20">960909</td>
          <td>OTRAS ACTIVIDADES DE SERVICIOS PERSONALES N.C.P.</td>
          <td>NO</td>
          <td>2</td>
          <td>SI</td>
        </tr>
        <tr height="20">
          <th colspan="5">
            <a name="20">
              <font color="#000000">
                ACTIVIDADES DE LOS HOGARES COMO EMPLEADORES; ACTIVIDADES NO
                DIFERENCIADAS DE LOS HOGARES&nbsp;
              </font>
            </a>
          </th>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            ACTIVIDADES DE LOS HOGARES COMO EMPLEADORES DE PERSONAL
            DOM&Eacute;STICO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">970000</td>
          <td>
            ACTIVIDADES DE LOS HOGARES COMO EMPLEADORES DE PERSONAL
            DOM&Eacute;STICO
          </td>
          <td>NO</td>
          <td>G</td>
          <td>NO</td>
        </tr>
        <tr height="20">
          <th colspan="5">
            <a name="21">
              <font color="#000000">
                ACTIVIDADES DE ORGANIZACIONES Y &Oacute;RGANOS
                EXTRATERRITORIALES
              </font>
            </a>
          </th>
        </tr>
        <tr height="40">
          <td height="40">C&oacute;digo</td>
          <td>
            ACTIVIDADES DE ORGANIZACIONES Y &Oacute;RGANOS
            EXTRATERRITORIALES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td width="74">
            Afecto a <br />
            IVA
          </td>
          <td width="80">
            Categor&iacute;a <br />
            Tributaria
          </td>
          <td width="80">Disponible Internet</td>
        </tr>
        <tr height="20">
          <td height="20">990000</td>
          <td>
            ACTIVIDADES DE ORGANIZACIONES Y &Oacute;RGANOS EXTRATERRITORIALES
          </td>
          <td>G</td>
          <td>1</td>
          <td>NO</td>
        </tr>
      </thead>
    </table>`;

  function parseTable(htmlString) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");
    const table = doc.querySelector("table");

    const headers = [];
    table.querySelectorAll("thead th, thead td").forEach((th) => {
      headers.push(th.textContent.replace(/\s+/g, " ").trim());
    });

    return headers;
  }

  const jsonData = parseTable(htmlString);

  return (
    <div>
      {JSON.stringify(jsonData[5])}
      {jsonData
        .filter((d) => d !== "Código")
        .filter((d) => d !== "SI")
        .filter((d) => d !== "1")
        .filter((d) => d !== "Categoría Tributaria")
        .filter((d) => d !== `Afecto a IVA`)
        .filter((d) => d !== `Disponible Internet`)
        .filter((d) => d !== `G`)
        .map((data) => (
          <div key={data}>{data}</div>
        ))}
    </div>
  );
};

export default Rubros;
