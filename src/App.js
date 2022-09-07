import React, { useState } from 'react';
import axios from 'axios';

import jsPDF from 'jspdf';
import 'jspdf-autotable';

function App() {
	// data state
	const [data, setData] = useState([]);

	// click on fetch api button
	const fetchApi = () => {
		axios.get('https://jsonplaceholder.typicode.com/todos').then((response) => {
			const data = response.data;
			setData(data);
		});
	};

	// download data in pdf format
	const downloadData = async () => {
		const input = document.getElementById('image');
		const pdf = new jsPDF({
			orientation: 'portrait',
			// unit: 'mm',
			// format: [210, 207],
			format: 'a4',
		});

		var x = 0;

		console.log(parseInt(document.getElementById('image').clientTop));
		let a = pdf.text('Hello world!', 10, (x += 20));
		console.log(a.getVerticalCoordinateString);
		var img = new Image();
		img.src = 'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350';
		pdf.setFontSize(9);
		console.log(x);
		let reportTitle = `
    Hello worldHello worldHello worldHello worldHello asdia sdipasidj aisdjioasd iosdjaosdi asdoiasjdasdoijasd  worldHello worldHello worldHello worldHello world! Finnn`;

		reportTitle = pdf.splitTextToSize(reportTitle, 180);
		pdf.text(reportTitle, 10, x + 10);
		x += reportTitle.length * 9;
		console.log(x);

		//img puede ser un compinente tambien
		pdf.addImage(img, 'jpg', 10, x, 70, 50).getVerticalCoordinateString();
		x += 50;
		x += 10;

		//se le puede pasar el componente asi no se tiene que mostrar
		//La tabla se corta automaticamente al pasarse de pagina
		pdf.autoTable({
			html: '#table',
			startY: x,
			tableLineColor: 'black',
			tableLineWidth: 0.1,
			theme: 'plain',
			// alternateRowStyles: { lineWidth: 0.1, tableLineWidth: 0.1, lineColor: 'black' }, //Para filas alternadas
			rowStyles: { lineWidth: 0.1, tableLineWidth: 0.1, lineColor: 'black' },

			didParseCell: function (data) {
				// var rows = data.table.body;
				//Aca se pueden poner estilo a celdas individuales
				data.cell.styles.lineWidth = 0.1;
				data.cell.styles.lineColor = 'black';

				// }
			},
			//Para saber hasta donde quedo la tabla en el pdf
			didDrawPage: (d) => (x = d.cursor.y),
		});

		pdf.text('Hello world!', 10, x + 10);
		reportTitle = `
    Hello worldHello worldHello worldHello worldHello asdia sdipasidj aisdjioasd iosdjaosdi asdoiasjdasdoijasd  worldHello worldHello worldHello worldHello world! Finnn
    Hello worldHello worldHello worldHello worldHello asdia sdipasidj aisdjioasd iosdjaosdi asdoiasjdasdoijasd  worldHello worldHello worldHello worldHello world! Finnn
    Hello worldHello worldHello worldHello worldHello asdia sdipasidj aisdjioasd iosdjaosdi asdoiasjdasdoijasd  worldHello worldHello worldHello worldHello world! Finnn
    Hello worldHello worldHello worldHello worldHello asdia sdipasidj aisdjioasd iosdjaosdi asdoiasjdasdoijasd  worldHello worldHello worldHello worldHello world! Finnn
    Hello worldHello worldHello worldHello worldHello asdia sdipasidj aisdjioasd iosdjaosdi asdoiasjdasdoijasd  worldHello worldHello worldHello worldHello world! Finnn
     Hello worldHello worldHello worldHello worldHello asdia sdipasidj aisdjioasd iosdjaosdi asdoiasjdasdoijasd  worldHello worldHello worldHello worldHello world! Finnn
    Hello worldHello worldHello worldHello worldHello asdia sdipasidj aisdjioasd iosdjaosdi asdoiasjdasdoijasd  worldHello worldHello worldHello worldHello world! Finnn
    Hello worldHello worldHello worldHello worldHello asdia sdipasidj aisdjioasd iosdjaosdi asdoiasjdasdoijasd  worldHello worldHello worldHello worldHello world! Finnn
    Hello worldHello worldHello worldHello worldHello asdia sdipasidj aisdjioasd iosdjaosdi asdoiasjdasdoijasd  worldHello worldHello worldHello worldHello world! Finnn
    Hello worldHello worldHello worldHello worldHello asdia sdipasidj aisdjioasd iosdjaosdi asdoiasjdasdoijasd  worldHello worldHello worldHello worldHello world! Finnn
     Hello worldHello worldHello worldHello worldHello asdia sdipasidj aisdjioasd iosdjaosdi asdoiasjdasdoijasd  worldHello worldHello worldHello worldHello world! Finnn
    Hello worldHello worldHello worldHello worldHello asdia sdipasidj aisdjioasd iosdjaosdi asdoiasjdasdoijasd  worldHello worldHello worldHello worldHello world! Finnn
    Hello worldHello worldHello worldHello worldHello asdia sdipasidj aisdjioasd iosdjaosdi asdoiasjdasdoijasd  worldHello worldHello worldHello worldHello world! Finnn
    Hello worldHello worldHello worldHello worldHello asdia sdipasidj aisdjioasd iosdjaosdi asdoiasjdasdoijasd  worldHello worldHello worldHello worldHello world! Finnn
    Hello worldHello worldHello worldHello worldHello asdia sdipasidj aisdjioasd iosdjaosdi asdoiasjdasdoijasd  worldHello worldHello worldHello worldHello world! Finnn
    `;

		reportTitle += reportTitle;

		reportTitle = pdf.splitTextToSize(reportTitle, 180);
		pdf.text(reportTitle, 10, x + 10);

		pdf.text('Hello world 2', 10, (x += 10));

		pdf.save('Todos.pdf');
	};

	return (
		<div className="container" style={{ width: '2480px' }}>
			<h3>Simplest way to export HTML Table to PDF in React</h3>

			<button onClick={fetchApi} className="btn btn-success btn-md">
				FETCH API
			</button>
			<div id="coso">{`
    Hello worldHello worldHello worldHello worldHello asdia sdipasidj aisdjioasd iosdjaosdi asdoiasjdasdoijasd  worldHello worldHello worldHello worldHello world! Finnn
    Hello worldHello worldHello worldHello worldHello asdia sdipasidj aisdjioasd iosdjaosdi asdoiasjdasdoijasd  worldHello worldHello worldHello worldHello world! Finnn
    Hello worldHello worldHello worldHello worldHello asdia sdipasidj aisdjioasd iosdjaosdi asdoiasjdasdoijasd  worldHello worldHello worldHello worldHello world! Finnn
    Hello worldHello worldHello worldHello worldHello asdia sdipasidj aisdjioasd iosdjaosdi asdoiasjdasdoijasd  worldHello worldHello worldHello worldHello world! Finnn
    Hello worldHello worldHello worldHello worldHello asdia sdipasidj aisdjioasd iosdjaosdi asdoiasjdasdoijasd  worldHello worldHello worldHello worldHello world! Finnn
     Hello worldHello worldHello worldHello worldHello asdia sdipasidj aisdjioasd iosdjaosdi asdoiasjdasdoijasd  worldHello worldHello worldHello worldHello world! Finnn
    Hello worldHello worldHello worldHello worldHello asdia sdipasidj aisdjioasd iosdjaosdi asdoiasjdasdoijasd  worldHello worldHello worldHello worldHello world! Finnn
    Hello worldHello worldHello worldHello worldHello asdia sdipasidj aisdjioasd iosdjaosdi asdoiasjdasdoijasd  worldHello worldHello worldHello worldHello world! Finnn
    Hello worldHello worldHello worldHello worldHello asdia sdipasidj aisdjioasd iosdjaosdi asdoiasjdasdoijasd  worldHello worldHello worldHello worldHello world! Finnn
    Hello worldHello worldHello worldHello worldHello asdia sdipasidj aisdjioasd iosdjaosdi asdoiasjdasdoijasd  worldHello worldHello worldHello worldHello world! Finnn
     Hello worldHello worldHello worldHello worldHello asdia sdipasidj aisdjioasd iosdjaosdi asdoiasjdasdoijasd  worldHello worldHello worldHello worldHello world! Finnn
    Hello worldHello worldHello worldHello worldHello asdia sdipasidj aisdjioasd iosdjaosdi asdoiasjdasdoijasd  worldHello worldHello worldHello worldHello world! Finnn
    Hello worldHello worldHello worldHello worldHello asdia sdipasidj aisdjioasd iosdjaosdi asdoiasjdasdoijasd  worldHello worldHello worldHello worldHello world! Finnn
    Hello worldHello worldHello worldHello worldHello asdia sdipasidj aisdjioasd iosdjaosdi asdoiasjdasdoijasd  worldHello worldHello worldHello worldHello world! Finnn
    Hello worldHello worldHello worldHello worldHello asdia sdipasidj aisdjioasd iosdjaosdi asdoiasjdasdoijasd  worldHello worldHello worldHello worldHello world! Finnn
    `}</div>
			<div className="download-data-div">
				<button className="btn btn-primary btn-md" onClick={downloadData}>
					DOWNLOAD DATA
				</button>
			</div>
			<div className="container" id="container" style={{ width: '2480px' }}>
				{data.length > 0 && (
					<div className="table-responsive" style={{ marginTop: 30 + 'px' }}>
						<h3>TODO LIST</h3>
						<img id="image" src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" alt="new" />
						<table className="table table-borderless" style={{ border: '1px solid' }} id="table">
							<thead>
								<tr>
									<th scope="col">ID</th>
									<th scope="col">TITLE</th>
									<th scope="col">STATUS</th>
								</tr>
							</thead>

							{data.map((individualData) => (
								<tbody key={individualData.id} style={{ border: '1px solid' }}>
									<tr>
										<td>{individualData.id}</td>
										<td>{individualData.title}</td>
										<td>{String(individualData.completed)}</td>
									</tr>
								</tbody>
							))}
						</table>
						<hr></hr>
					</div>
				)}
			</div>
		</div>
	);
}

export default App;
