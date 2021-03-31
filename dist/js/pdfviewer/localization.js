import Ember from 'ember';
export default Ember.Route.extend({
    model() {
        return {
            serviceUrl: window.baseurl + "api/PdfViewer",
        }
    }
});

ej.PdfViewer.Locale['es-ES'] = {
    toolbar: {
        print: {
            headerText: 'Impresión',
            contentText: 'Imprimir el documento PDF.'
        },
        first: {
            headerText: 'primero',
            contentText: 'Ir a la primera página del documento PDF.'
        },
        previous: {
            headerText: 'Anterior',
            contentText: 'Ir a la página anterior del documento PDF.'
        },
        next: {
            headerText: 'Siguiente',
            contentText: 'Ir a la página siguiente del documento PDF.'
        },
        last: {
            headerText: 'Último',
            contentText: 'Ir a la última página del documento PDF.'
        },
        zoomIn: {
            headerText: 'Acercarse',
            contentText: 'Acercar al documento PDF.'
        },
        zoomOut: {
            headerText: 'Disminuir el zoom',
            contentText: 'Alejar la imagen del documento PDF.'
        },
        pageIndex: {
            headerText: 'Número de página',
            contentText: 'número de página actual para ver.'
        },
        zoom: {
            headerText: 'Enfocar',
            contentText: 'Zoom para acercar o alejar el documento PDF.'
        },
        fitToWidth: {
            headerText: 'Ajustar al ancho',
            contentText: 'Ajuste a la página PDF a la anchura del contenedor .'
        },
        fitToPage: {
            headerText: 'Ajustar a la página',
            contentText: 'Ajuste a la página PDF al contenedor .'
        },
        download: {
            headerText: 'Descargar',
            contentText: 'Descargar el documento PDF .'
        },
        search: {
            headerText: 'Buscar texto',
            contentText: 'Buscar texto en las páginas PDF .'
        },
        highlight: {
            headerText: 'Subrayar el texto',
            contentText: 'Resaltar texto en las páginas PDF.',
        },
        strikeout: {
            headerText: 'Texto de StrikeOut',
            contentText: 'Strike Out en las páginas PDF.',
        },
        underline: {
            headerText: 'Subrayar el texto',
            contentText: 'Subraye el texto en las páginas PDF.',
        },
        signature: {
            headerText: 'Firma',
            contentText: 'Agregue o cree la firma escrita a mano.',
        },
        select: {
            headerText: 'Selección',
            contentText: 'Herramienta de selección de texto.',
        },
        scroll: {
            headerText: 'Panning',
            contentText: 'Haga clic para desplazarse alrededor del documento',
        },
    },
    contextMenu: {
        copy: {
            contentText: 'Dupdo',
        },
        googleSearch: {
            contentText: 'Busca en Google',
        },
        Find: {
            contentText: 'Encontrar:',
        },
        matchCase: {
            contentText: 'MatchCase',
        },
        auto: {
            contentText: 'Auto',
        },
        openPopup: {
            contentText: 'OpenPopup',
        },
        Delete: {
            contentText: 'Borrar',
        },
        properties: {
            contentText: 'Propiedades....',
        },
    },
    propertyWindow: {
        underlineProperties: {
            contentText: 'Subrayar propiedades'
        },
        strikeOutProperties: {
            contentText: 'StrikeOutProperties'
        },
        highlightProperties: {
            contentText: 'DestacadosProperties'
        },
        signatureProperties: {
            contentText: 'Firma propiedades'
        },
        appearance: {
            contentText: 'apariencia'
        },
        general: {
            contentText: 'general'
        },
        color: {
            contentText: 'kleur:'
        },
        opacity: {
            contentText: 'opacidad:'
        },
        author: {
            contentText: 'autor:'
        },
        subject: {
            contentText: 'tema:'
        },
        modified: {
            contentText: 'modificado:'
        },
        ok: {
            contentText: 'De acuerdo'
        },
        cancel: {
            contentText: 'cancelar'
        },
        locked: {
            contentText: 'Bloqueado'
        }
    },
    signatureWindow: {
        Signature: {
            contentText: 'Añadir firma'
        },
        Add: {
            contentText: 'Añadir'
        },
        clear: {
            contentText: 'Claro'
        },
    },
    waitingPopup: {
        print: {
            contentText: "Preparación del documento para imprimir ..."
        }
    }
};
