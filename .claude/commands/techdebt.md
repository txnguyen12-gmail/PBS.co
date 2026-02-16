Scan codebase và tìm:
1. Code trùng lặp có thể extract
2. TODO/FIXME comments chưa xử lý
3. Dead code có thể xóa
4. Dependencies không dùng
5. Components nên chuyển sang server components

Output:
### High Priority
- [item] - [file:line] - [suggestion]

### Medium Priority
- [item] - [file:line] - [suggestion]

### Low Priority
- [item] - [file:line] - [suggestion]

Không tự động fix. Chỉ report.