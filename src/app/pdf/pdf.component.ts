import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { jsPDF } from "jspdf";
import autoTable from 'jspdf-autotable';
const doc = new jsPDF();

@Component({
  selector: 'app-pdf',
  standalone: true,
  imports: [],
  templateUrl: './pdf.component.html',
  styleUrl: './pdf.component.css'
})
export class PdfComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.createPDF();
  }

  createPDF() {
    const doc = new jsPDF();
  
    // Llamada a la función que retorna el contenido HTML
    const htmlContent = this.getHtmlContent();
  
    // Usar el método `html` de jsPDF para renderizar el contenido HTML en el PDF
    doc.html(htmlContent, {
      callback: function (doc) {
        // Aquí se guarda el archivo PDF
        doc.save('presupuesto.pdf');
      },
      x: 15, // Margen izquierdo
      y: 15, // Margen superior
      width: 180, // Ancho del contenido
      windowWidth: 800, // Ancho de la ventana para ajuste de tamaño
    });
  }
  
  // Función para generar el contenido HTML
  getHtmlContent() {
    return `
      <!-- Tabla combinada (encabezado + logo e información de la empresa) -->
      <table style="width: 100%; border: 2px solid black; border-collapse: collapse;">
        <!-- Fila del encabezado con borde grueso -->
        <tr>
          <td colspan="2" style="background-color: #969696; color: black; text-align: center; font-size: 18px; font-weight: bold; padding: 10px; border: 2px solid black;">
            PRESUPUESTO
          </td>
        </tr>
        <!-- Fila con logo e información de la empresa, sin separación central -->
        <tr>
          <td colspan="2" style="display: flex; padding: 10px; text-align: left; font-size: 12px; color: black; border: 2px solid black;">
            <!-- Columna del logo con tamaño ajustado -->
            <div style="width: 50%; text-align: center; padding-right: 10px;">
              <img src='/assets/img/segma-logo.png' alt="Logo" style="width: 350px; height: auto;" />
            </div>
            <!-- Columna de la información de la empresa -->
            <div style="width: 50%; padding-left: 10px;">
              <!-- Fila 1 (con dos columnas y borde) -->
              <table style="width: 100%; border: 2px solid black; border-collapse: collapse;">
                <tr>
                  <td style="width: 50%; padding: 5px; border: 2px solid black;">Segma Guaymas</td>
                  <td style="width: 50%; padding: 5px; border: 2px solid black;">622 174 33 27</td>
                </tr>
              </table>
  
              <!-- Fila 2 (sin borde) -->
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 5px;">CALLE PASEO PERLA TAHITI 95</td>
                </tr>
              </table>
  
              <!-- Fila 3 (con borde) -->
              <table style="width: 100%; border: 2px solid black; border-collapse: collapse;">
                <tr>
                  <td style="padding: 5px; border: 2px solid black;">FRACC. PERLA MARINA II</td>
                </tr>
              </table>
  
              <!-- Fila 4 (sin borde) -->
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 5px;">Guaymas, Sonora C.P 8542</td>
                </tr>
              </table>
  
              <!-- Fila 5 (con dos columnas y borde) -->
              <table style="width: 100%; border: 2px solid black; border-collapse: collapse;">
                <tr>
                  <td style="width: 50%; padding: 5px; border: 2px solid black;">15-oct.-24</td>
                  <td style="width: 50%; padding: 5px; border: 2px solid black;">segmaguaymas@gmail.com</td>
                </tr>
              </table>
            </div>
          </td>
        </tr>
      </table>
    `;
  }
  
}