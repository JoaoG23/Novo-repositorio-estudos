Relacionamentos: 

Aqui estão exemplos simples das classes `Model` em C# para representar os três tipos de relacionamentos que discutimos: **1:N**, **1:1** e **N:N**, todos compatíveis com o Entity Framework Core.
![alt text](image.png)
![alt text](image-1.png)
---

## 🧩 1. Relacionamento 1:N — `Usuario` e `TipoUsuario`

```csharp
public class Usuario
{
    public int Id { get; set; }
    public string Nome { get; set; }

    public int IdTipoUsuario { get; set; }              // FK
    public TipoUsuario TipoUsuario { get; set; }        // Navegação
}

public class TipoUsuario
{
    public int Id { get; set; }
    public string Descricao { get; set; }

    public ICollection<Usuario> Usuarios { get; set; }  // Navegação reversa (opcional)
}
```

---

## 🔗 2. Relacionamento 1:1 — `Usuario` e `Perfil`

```csharp
public class Usuario
{
    public int Id { get; set; }
    public string Nome { get; set; }

    public Perfil Perfil { get; set; }  // Navegação 1:1
}

public class Perfil
{
    public int Id { get; set; }
    public string Bio { get; set; }

    public int UsuarioId { get; set; }     // FK
    public Usuario Usuario { get; set; }   // Navegação reversa
}
```

---

## 🔁 3. Relacionamento N:N — `Usuario` e `Projeto` via `UsuarioProjeto`

```csharp
public class Usuario
{
    public int Id { get; set; }
    public string Nome { get; set; }

    public ICollection<UsuarioProjeto> UsuariosProjetos { get; set; }
}

public class Projeto
{
    public int Id { get; set; }
    public string Nome { get; set; }

    public ICollection<UsuarioProjeto> UsuariosProjetos { get; set; }
}

public class UsuarioProjeto
{
    public int UsuarioId { get; set; }
    public Usuario Usuario { get; set; }

    public int ProjetoId { get; set; }
    public Projeto Projeto { get; set; }
}
```

---

Essas classes funcionam perfeitamente com o `OnModelCreating` que você já começou a montar. Se quiser, posso te ajudar a configurar o `DbContext` completo com `DbSet<>` e os `HasKey`, `HasOne`, `WithMany`, etc.

Quer que eu monte o `AppDbContext` completo com essas entidades?



 Vamos explorar como os relacionamentos entre entidades são configurados no Entity Framework Core usando o método `OnModelCreating` dentro do `AppDbContext`. Esse método é essencial para definir como as tabelas se relacionam no banco de dados — como se fossem os relacionamentos SQL (1:1, 1:N, N:N).

---

## 🧩 Tipos de Relacionamentos no EF Core

### 1. **Relacionamento 1:N (Um para Muitos)**
Um exemplo clássico: muitos usuários podem ter o mesmo tipo de usuário.

```csharp
modelBuilder.Entity<Usuario>()
    .HasOne(u => u.TipoUsuario)         // Um usuário tem um TipoUsuario
    .WithMany()                         // Um TipoUsuario pode ter muitos usuários
    .HasForeignKey(u => u.IdTipoUsuario)
    .OnDelete(DeleteBehavior.Restrict); // Evita deletar TipoUsuario se houver usuários
```

🔹 Equivalente SQL:
```sql
FOREIGN KEY (IdTipoUsuario) REFERENCES TipoUsuario(Id)
```

---

### 2. **Relacionamento 1:1 (Um para Um)**
Exemplo: cada usuário tem um perfil único.

```csharp
modelBuilder.Entity<Usuario>()
    .HasOne(u => u.Perfil)
    .WithOne(p => p.Usuario)
    .HasForeignKey<Perfil>(p => p.UsuarioId);
```

🔹 Equivalente SQL:
```sql
FOREIGN KEY (UsuarioId) REFERENCES Usuario(Id) UNIQUE
```

---

### 3. **Relacionamento N:N (Muitos para Muitos)**
Exemplo: usuários participam de vários projetos e projetos têm vários usuários.

```csharp
modelBuilder.Entity<UsuarioProjeto>()
    .HasKey(up => new { up.UsuarioId, up.ProjetoId });

modelBuilder.Entity<UsuarioProjeto>()
    .HasOne(up => up.Usuario)
    .WithMany(u => u.UsuariosProjetos)
    .HasForeignKey(up => up.UsuarioId);

modelBuilder.Entity<UsuarioProjeto>()
    .HasOne(up => up.Projeto)
    .WithMany(p => p.UsuariosProjetos)
    .HasForeignKey(up => up.ProjetoId);
```

🔹 Equivalente SQL:
```sql
CREATE TABLE UsuarioProjeto (
    UsuarioId INT,
    ProjetoId INT,
    PRIMARY KEY (UsuarioId, ProjetoId),
    FOREIGN KEY (UsuarioId) REFERENCES Usuario(Id),
    FOREIGN KEY (ProjetoId) REFERENCES Projeto(Id)
);
```

---

## 🛠️ Dicas Importantes

- Use `WithMany()` quando a outra entidade tiver uma coleção.
- Use `WithOne()` quando a outra entidade tiver apenas uma instância.
- Sempre defina a `ForeignKey` explicitamente se o nome não seguir convenções.
- `DeleteBehavior` controla o que acontece ao deletar a entidade relacionada (Restrict, Cascade, etc).
