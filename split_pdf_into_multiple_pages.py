import PyPDF2

# Input PDF file path
input_pdf_path = "./test.pdf"

# Open the PDF file
with open(input_pdf_path, "rb") as infile:
    reader = PyPDF2.PdfReader(infile)
    
    # Loop through each page
    for i in range(len(reader.pages)):
        writer = PyPDF2.PdfWriter()
        writer.add_page(reader.pages[i])
        
        # Output file name
        output_pdf_path = f"page_{i+1}.pdf"
        with open(output_pdf_path, "wb") as outfile:
            writer.write(outfile)

        print(f"Created: {output_pdf_path}")
