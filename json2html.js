export default function json2html(data) {
    // Get all unique column names from the data
    const columns = [...new Set(
      data.flatMap(obj => Object.keys(obj))
    )];
  
    // Build the table HTML
    const table = [`<table data-user="aaryansh12102003@gmail.com">`];
    
    // Add header row
    table.push('  <thead>');
    table.push('    <tr>');
    columns.forEach(col => {
      table.push(`      <th>${col}</th>`);
    });
    table.push('    </tr>');
    table.push('  </thead>');
    
    // Add data rows
    table.push('  <tbody>');
    data.forEach(row => {
      table.push('    <tr>');
      columns.forEach(col => {
        if (col in row) {
          table.push(`      <td>${row[col]}</td>`);
        } else {
          table.push('      <td></td>');
        }
      });
      table.push('    </tr>');
    });
    table.push('  </tbody>');
    table.push('</table>');
    
    return table.join('\n');
  }