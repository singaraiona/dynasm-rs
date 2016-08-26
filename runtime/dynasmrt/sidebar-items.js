initSidebarItems({"macro":[["MutPointer!","Preforms the same action as the Pointer! macro, but casts to a *mut pointer."],["Pointer!","This macro takes a *const pointer from the source operand, and then casts it to the desired return type. this allows it to be used as an easy shorthand for passing pointers as dynasm immediate arguments."]],"struct":[["Assembler","This struct is an implementation of a dynasm runtime. It supports incremental compilation as well as multithreaded execution with simultaneous compilation. Its implementation ensures that no memory is writeable and executable at the same time."],["AssemblyOffset","A struct representing an offset into the assembling buffer of a `DynasmApi` struct. The wrapped `usize` is the offset from the start of the assembling buffer in bytes."],["DynamicLabel","A dynamic label"],["ExecutableBuffer","A structure holding a buffer of executable memory"],["Executor","A read-only shared reference to the executable buffer inside an Assembler. By locking it the internal `ExecutableBuffer` can be accessed and executed."]],"trait":[["DynasmApi","This trait represents the interface that must be implemented to allow the dynasm preprocessor to assemble into a datastructure."]]});