"use client";
import { CirclePlus } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";

const BookAdd = ({createBook}) => {
  return (
    <Modal>
      <Button variant="secondary">Add book</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <CirclePlus className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Add book</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form action={createBook} className="flex flex-col gap-4">
                  <TextField className="w-full" name="title">
                    <Label>Title</Label>
                    <Input placeholder="Enter book title" />
                  </TextField>

                  <TextField className="w-full" name="author">
                    <Label>Author</Label>
                    <Input placeholder="Enter author name" />
                  </TextField>

                  <TextField className="w-full" name="price">
                    <Label>Price</Label>
                    <Input type="number" placeholder="Enter price" />
                  </TextField>

                  <TextField className="w-full" name="category">
                    <Label>Category</Label>
                    <Input placeholder="Enter category (e.g. Leadership)" />
                  </TextField>

                  <TextField className="w-full" name="status">
                    <Label>Status</Label>
                    <select className="w-full border rounded px-3 py-2">
                      <option value="available">Available</option>
                      <option value="out_of_stock">Out of Stock</option>
                    </select>
                  </TextField>

                  <TextField className="w-full" name="rating">
                    <Label>Rating</Label>
                    <Input
                      type="number"
                      step="0.1"
                      placeholder="Enter rating (e.g. 4.5)"
                    />
                  </TextField>

                  <TextField className="w-full" name="publishedYear">
                    <Label>Published Year</Label>
                    <Input type="number" placeholder="Enter year (e.g. 2009)" />
                  </TextField>

                  <button className="bg-primary text-white py-2 rounded">
                    Add Book
                  </button>
                </form>
              </Surface>
            </Modal.Body>
            <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button slot="close">Send Message</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default BookAdd;
